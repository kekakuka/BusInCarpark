import { put } from 'redux-saga/effects';
import { getReportsApi, createReportApi, deleteReportApi } from '../../api/report';

import actions from '../action/index';

export function* getReportsSaga() {
  yield put(actions.reports.setLoading(true));
  try {
    const { data } = yield getReportsApi();
    if (data.statusCode === 200) {
      yield put(actions.reports.getReportsSuccess(JSON.parse(data.body)));
    } else {
      yield put(actions.reports.getError('Get Error'));
    }
  } catch (error) {
    yield put(actions.reports.getError('Get Network Error'));
  }
}

export function* saveReportSaga({ report }) {
  yield put(actions.reports.setLoading(true));
  try {
    const { data } = yield createReportApi(report);
    if (data.statusCode === 200) {
      yield put(actions.reports.saveReportSuccess({ ...report, id: data.body }));
    } else {
      yield put(actions.reports.getError('Save Error'));
    }
  } catch (error) {
    yield put(actions.reports.getError('Save Network Error'));
  }
}

export function* deleteReportSaga({ id }) {
  yield put(actions.reports.setLoading(true));
  try {
    const { data } = yield deleteReportApi({ id });
    if (data.statusCode === 200) {
      yield put(actions.reports.deleteReportSuccess(id));
    } else {
      yield put(actions.reports.getError('Delete Error'));
    }
  } catch (error) {
    yield put(actions.reports.getError('Delete Network Error'));
  }
}
