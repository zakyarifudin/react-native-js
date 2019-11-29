import {all, takeEvery, put, call} from 'redux-saga/effects';
import {getNoAuthApi} from '../../helper/helper';
import actions from './actions';

// Get all data
export function* getPosts({payload}) {
  try {
    const {start, limit} = payload;
    let url = `posts?_start=${start}&_limit=${limit}`;

    const [posts] = yield all([call(getNoAuthApi, url)]);
    // Jika sukses get data company
    if (posts && posts.length > 0) {
      yield put({
        type: actions.GET_POSTS_SUCCESS,
        posts,
        limit,
        start,
      });
    } else {
      yield put({
        type: actions.GET_POSTS_ERROR,
        error: {message: 'Check your internet connection'},
      });
    }
  } catch (error) {
    yield put({
      type: actions.GET_POSTS_ERROR,
      error: {message: 'Check your internet connection'},
    });
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(actions.GET_POSTS_REQUEST, getPosts)]);
}
