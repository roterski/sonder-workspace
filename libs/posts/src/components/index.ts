import { GroupPostsComponent } from "./group-posts/group-posts.component";
import { PostItemComponent } from "./post-item/post-item.component";
import { NewPostFormComponent } from "./new-post-form/new-post-form.component";
import { PostShowComponent } from "./post-show/post-show.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { CommentTreeComponent } from "./comment-tree/comment-tree.component";
import { CommentItemComponent } from "./comment-tree/comment-item/comment-item.component";
import { PostVoteButtonsComponent } from "./vote-buttons/post-vote-buttons/post-vote-buttons.component";
import { CommentVoteButtonsComponent } from "./vote-buttons/comment-vote-buttons/comment-vote-buttons.component";
import { NewCommentFormComponent } from "./new-comment-form/new-comment-form.component";

export const components: any[] = [
  GroupPostsComponent,
  PostItemComponent,
  NewPostFormComponent,
  PostShowComponent,
  PostsListComponent,
  CommentTreeComponent,
  CommentItemComponent,
  PostVoteButtonsComponent,
  CommentVoteButtonsComponent,
  NewCommentFormComponent
];

export * from "./group-posts/group-posts.component";
export * from "./post-item/post-item.component";
export * from "./new-post-form/new-post-form.component";
export * from "./post-show/post-show.component";
export * from "./posts-list/posts-list.component";
export * from "./comment-tree/comment-tree.component";
export * from "./comment-tree/comment-item/comment-item.component";
export * from "./vote-buttons/post-vote-buttons/post-vote-buttons.component";
export * from "./vote-buttons/comment-vote-buttons/comment-vote-buttons.component";
export * from "./new-comment-form/new-comment-form.component";
