import API from 'src/api';

export const getInitPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST'});
      const response = await API.posts.getList( {offsetStep: 10});
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_FAIL' });
    }
  }
}

export const getScrollPostsAction = (NPosts) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'});
      const response = await API.posts.getList( {offset: NPosts, offsetStep: 2});
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL' });
    }
  }
}

export const icreaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCRESE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'MAIN_PAGE_INCRESE_LIKE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_INCRESE_LIKE_FAIL' });
    }
  }
}

export const icreaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCRESE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'MAIN_PAGE_INCRESE_DISLIKE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_INCRESE_DISLIKE_FAIL' });
    }
  }
}