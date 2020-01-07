import * as actionTypes from '../actionTypes';

const reports = {
  //methods for saga
  saveReport(report) {
    return {
      type: actionTypes.SAVE_REPORT,
      report
    };
  },
  getReports() {
    return {
      type: actionTypes.GET_REPORTS
    };
  },
  deleteReport(id) {
    return {
      type: actionTypes.DELETE_REPORT,
      id
    };
  },

  //methods for reducer
  saveReportSuccess(report) {
    return {
      type: actionTypes.SAVE_REPORT_SUCCESS,
      report
    };
  },
  getReportsSuccess(reports) {
    return {
      type: actionTypes.GET_REPORTS_SUCCESS,
      reports
    };
  },
  deleteReportSuccess(id) {
    return {
      type: actionTypes.DELETE_REPORT_SUCCESS,
      id
    };
  },
  setLoading(isLoading) {
    return {
      type: actionTypes.SET_LOADING,
      isLoading
    };
  },
  getError(reason = '') {
    return {
      type: actionTypes.GET_ERROR,
      reason
    };
  }
};

export default reports;
