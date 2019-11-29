import actions from './actions';

const initState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
  start: 0,
  limit: 10,
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts:
          action.start === 0 ? action.posts : [...state.posts, ...action.posts],
        start: action.start,
        limit: action.limit,
        loading: false,
      };
    }
    case actions.GET_POST_REQUEST: {
      return {
        ...state,
        post: {},
        loading: true,
      };
    }
    case actions.GET_POST_SUCCESS: {
      return {
        ...state,
        post: action.post,
        loading: false,
      };
    }
    case actions.REQUEST_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    }
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default: {
      return state;
    }
  }
}
