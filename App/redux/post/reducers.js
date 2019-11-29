import actions from './actions';

const initState = {
  posts: [],
  loading: false,
  error: null,
  start: 0,
  limit: 8,
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
    case actions.GET_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error,
      };
    }
    default: {
      return state;
    }
  }
}
