import { all, fork } from 'redux-saga/effects';
import LyricsSaga from './lyricsSaga';

export default function* rootSaga() {
  yield all([fork(LyricsSaga)]);
}
