import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, filter, take, switchMap, catchError } from "rxjs/operators";

import { PostsState, getPostLoadedByPostId } from "../+state/posts.interfaces";
import { LoadPost } from "../+state/posts.actions";

@Injectable()
export class PostLoadedGuard implements CanActivate {
  constructor(private store: Store<PostsState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkStore(next.params.postId).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(postId: number): Observable<boolean> {
    return this.store.select(getPostLoadedByPostId(postId)).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadPost(postId));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
