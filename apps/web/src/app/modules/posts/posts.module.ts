import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import {
  GroupPostsLoadedGuard,
  PostsService,
  components,
  PostShowComponent,
  postsReducer,
  postsInitialState,
  PostsEffects,
  PostLoadedGuard
} from "@sonder-workspace/posts";

import { AuthenticatedGuard, BACKEND_SERVICE } from "@sonder-workspace/auth";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

export const postsRoutes: Route[] = [
  {
    path: ":postId",
    canActivate: [AuthenticatedGuard, PostLoadedGuard],
    component: PostShowComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature("posts", postsReducer, {
      initialState: postsInitialState
    }),
    EffectsModule.forFeature([PostsEffects])
  ],
  declarations: [...components],
  exports: [...components],
  providers: [
    PostsEffects,
    GroupPostsLoadedGuard,
    PostLoadedGuard,
    PostsService,
    AuthenticatedGuard
  ]
})
export class PostsModule {}
