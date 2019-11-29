const actions = {
  GET_POSTS_REQUEST: '@post/GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: '@post/GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: '@post/GET_POSTS_ERROR',
  getPosts: (start, limit) => ({
    type: actions.GET_POSTS_REQUEST,
    payload: {
      start,
      limit,
    },
  }),
};

export default actions;
