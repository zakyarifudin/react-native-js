import {all} from 'redux-saga/effects';
import postSagas from './post/sagas';

export default function* rootSaga() {
  yield all([postSagas()]);
}
