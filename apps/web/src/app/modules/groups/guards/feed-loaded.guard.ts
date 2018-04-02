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

import {
  GroupsState,
  getGroupFeedLoadedByGroupId
} from "../+state/groups.interfaces";
import { LoadFeed } from "../+state/groups.actions";

@Injectable()
export class FeedLoadedGuard implements CanActivate {
  constructor(private store: Store<GroupsState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkStore(next.params.groupId).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(groupId: number): Observable<boolean> {
    return this.store.select(getGroupFeedLoadedByGroupId(groupId)).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadFeed(groupId));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}