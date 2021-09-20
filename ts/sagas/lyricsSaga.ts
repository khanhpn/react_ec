import { takeEvery, all, fork } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/lyricActionTypes';

function* onLoadLyrics() {
  return 1;
}

function* watchOnLoadLyrics() {
  yield takeEvery(actionTypes.GET_LYRICS, onLoadLyrics);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnLoadLyrics)]);
}
