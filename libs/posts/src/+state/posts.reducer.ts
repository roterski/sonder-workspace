import {PostsState} from './posts.interfaces';
import * as fromPostsActions from './posts.actions';
import { Post } from '../models';

export function postsReducer(state: PostsState, action: fromPostsActions.PostsAction): PostsState {
  switch (action.type) {
    case fromPostsActions.GROUP_POSTS_LOADED: {
      let groupPostsEntities = action.data;
      if (groupPostsEntities.length > 0) {
        groupPostsEntities = action.data.reduce(
          (entities: { [id: number]: Post }, post: Post) => {
            return {
              ...entities,
              [post.id]: post
            };
          },
          {
            // replace instead of appending
          }
        );
      }
      return {
        ...state,
        postsByGroups: {
          ...state.postsByGroups,
          entities: {
            ...state.postsByGroups.entities,
            ...{
              [action.groupId]: {
                loaded: true,
                loading: false,
                entities: groupPostsEntities
              }
            }
          }
        }
      }
    }
    case fromPostsActions.POST_COMMENTS_LOADED: {
      const { comments, ...post } = action.data;
      let commentEntities;
      if (comments.length > 0 ) {
        commentEntities = comments.reduce(
          (entities, comment) => {
            return {
              ...entities,
              [comment.id]: comment
            }
          }
        , {})
      }
      return {
        ...state,
        commentsByPosts: {
          ...state.commentsByPosts,
          entities: {
            ...state.commentsByPosts.entities,
            ...{
              [action.postId]: {
                entities: commentEntities,
                post: post,
                loaded: true,
                loading: false
              }
            }
          }
        }
      }
    }
    case fromPostsActions.POST_CREATED: {
      const groupPostsEntities = {
        ...state.postsByGroups.entities[action.groupId].entities,
        ...{ [action.payload.id]: action.payload }
      }
      const groupPosts = {
        ...state.postsByGroups.entities[action.groupId],
        ...{ entities: groupPostsEntities }
      }
      return {
        ...state,
        ...{
          postsByGroups: {
            ...state.postsByGroups,
            entities: {
              ...state.postsByGroups.entities,
              ...{ [action.groupId]: groupPosts }
            }
          }
        }
      }
    }
    case fromPostsActions.COMMENT_CREATED: {
      const postCommentsEntities = {
        ...state.commentsByPosts.entities[action.postId].entities,
        ...{ [action.data.id]: action.data }
      }
      const postComments = {
        ...state.commentsByPosts.entities[action.postId],
        ...{ entities: postCommentsEntities }
      }
      return {
        ...state,
        ...{
          commentsByPosts: {
            ...state.commentsByPosts,
            entities: {
              ...state.commentsByPosts.entities,
              ...{ [action.postId]: postComments }
            }
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}
