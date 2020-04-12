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

export const getScrollPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'});
      const response = await API.posts.getList( {offsetStep: 2});
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL' });
    }
  }
}