import {all, takeEvery, put, call} from 'redux-saga/effects';
import {getNoAuthApi} from '../../helper/helper';
import actions from './actions';

// Get all data
export function* getPosts({payload}) {
  try {
    const {start, limit} = payload;
    let url = `posts?_start=${start}&_limit=${limit}`;

    const [posts] = yield all([call(getNoAuthApi, url)]);

    if (posts) {
      yield put({
        type: actions.GET_POSTS_SUCCESS,
        posts,
        limit,
        start,
      });
    } else {
      yield put({
        type: actions.REQUEST_ERROR,
        error: {message: 'No Internet Connection'},
      });
    }
  } catch (error) {
    yield put({
      type: actions.REQUEST_ERROR,
      error: {message: 'No Internet Connection'},
    });
    console.log(error);
  }
}

// Get detail data
export function* getPost({payload}) {
  try {
    const {id} = payload;
    let url = `posts/${id}`;

    const post = yield call(getNoAuthApi, url);
    // Jika sukses get data
    if (post) {
      yield put({
        type: actions.GET_POST_SUCCESS,
        post,
      });
    } else {
      yield put({
        type: actions.REQUEST_ERROR,
        error: {message: 'No Internet Connection'},
      });
    }
  } catch (error) {
    yield put({
      type: actions.REQUEST_ERROR,
      error: {message: 'No Internet Connection'},
    });
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actions.GET_POSTS_REQUEST, getPosts),
    yield takeEvery(actions.GET_POST_REQUEST, getPost),
  ]);
}
