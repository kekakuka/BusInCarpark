import { _post, _get, _delete } from './index';

//get reports from backend
export const getReportsApi = data => {
  let req = {
    data,
    url: 'report'
  };
  return _get(req);
};

//create a report for backend
export const createReportApi = data => {
  let req = {
    data,
    url: 'report'
  };
  return _post(req);
};

//delete a report from backend
export const deleteReportApi = data => {
  let req = {
    data,
    url: 'report'
  };
  return _delete(req);
};
