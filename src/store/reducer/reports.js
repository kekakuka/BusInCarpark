import * as actionTypes from '../actionTypes';

export default function service(
  state = {
    reports: [],
    loading: false,
    error: ''
  },
  action
) {
  switch (action.type) {
    case actionTypes.GET_REPORTS_SUCCESS:
      return { reports: action.reports, loading: false, error: '' };
    case actionTypes.SAVE_REPORT_SUCCESS:
      return { reports: [...state.reports, action.report], loading: false, error: '' };
    case actionTypes.DELETE_REPORT_SUCCESS:
      return { reports: state.reports.filter(report => report.id !== action.id), loading: false, error: '' };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.isLoading };
    case actionTypes.GET_ERROR:
      return { reports: state.reports, loading: false, error: action.reason };
    default:
      return state;
  }
}
