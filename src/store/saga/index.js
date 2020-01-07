import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { deleteReportSaga, saveReportSaga, getReportsSaga } from './report';

//watch reports action
export function* watchReport() {
  yield all([
    takeEvery(actionTypes.DELETE_REPORT, deleteReportSaga),
    takeEvery(actionTypes.SAVE_REPORT, saveReportSaga),
    takeEvery(actionTypes.GET_REPORTS, getReportsSaga)
  ]);
}
