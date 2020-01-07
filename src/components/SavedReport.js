import React, { useEffect } from 'react';
import OneTask from './OneTask';
import { connect } from 'react-redux';
import action from '../store/action';

const SavedReport = React.memo(function Report({ reportInfo, deleteReport, disabled, getReports }) {
  //get Reports from dynamo Db
  useEffect(() => {
    getReports();
  }, [getReports]);
  return (
    <div>
      <span style={{ fontSize: 18, fontWeight: '600' }}>Saved Reports:</span>
      <br />
      {reportInfo.map((info, index) => (
        <OneTask key={index}>
          <span style={{ marginRight: 12 }}>
            {info.x},{info.y},{info.f}
          </span>
          <button
            disabled={disabled}
            onClick={() => {
              deleteReport(info.id);
            }}
          >
            Delete
          </button>
        </OneTask>
      ))}
    </div>
  );
});
//delete and get report from redux action
const mapGetDeleteToProps = { deleteReport: action.reports.deleteReport, getReports: action.reports.getReports };
export default connect(null, mapGetDeleteToProps)(SavedReport);
