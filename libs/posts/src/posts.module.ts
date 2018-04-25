import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postsReducer } from './+state/posts.reducer';
import { postsInitialState } from './+state/posts.init';
import { PostsEffects } from './+state/posts.effects';
import { PostShowComponent } from './components/post-show/post-show.component';
import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { CommentItemComponent } from './components/comment-tree/comment-item/comment-item.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("posts", postsReducer, {
      initialState: postsInitialState
    }),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsEffects],
  declarations: [CommentTreeComponent, PostShowComponent, CommentItemComponent]
})
export class PostsModule {}
