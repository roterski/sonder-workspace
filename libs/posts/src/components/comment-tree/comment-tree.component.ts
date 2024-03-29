import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import * as postsStore from "../../+state";
import { Observable } from 'rxjs/Observable';
import { Comment } from "../../models";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "comment-tree",
  templateUrl: "./comment-tree.component.html",
  styleUrls: ["./comment-tree.component.css"]
})
export class CommentTreeComponent implements OnInit {
  @Input() postId: number;
  @Input() commentId: number;
  @Input() parentIds: Array<number>;

  comments$: Observable<Array<Comment>>;

  constructor(private store: Store<postsStore.PostsState>) {}

  ngOnInit() {
    this.comments$ = this.store.select(postsStore.getPostCommentsChildren(this.postId, this.parentIds))
    .pipe(
      filter(comments => comments ? true : false),
      map(comments => comments.sort((a,b) => b.points - a.points))
    );
  }
}
