const actions = {
  GET_POSTS_REQUEST: '@post/GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: '@post/GET_POSTS_SUCCESS',
  GET_POST_REQUEST: '@post/GET_POST_REQUEST',
  GET_POST_SUCCESS: '@post/GET_POST_SUCCESS',
  REQUEST_ERROR: '@post/REQUEST_ERROR',
  CLEAR_ERROR: '@post/CLEAR_ERROR',
  getPosts: (start, limit) => ({
    type: actions.GET_POSTS_REQUEST,
    payload: {
      start,
      limit,
    },
  }),
  getPost: id => ({
    type: actions.GET_POST_REQUEST,
    payload: {
      id,
    },
  }),
  clearError: () => ({
    type: actions.CLEAR_ERROR,
  }),
};

export default actions;
