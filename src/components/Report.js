import React from 'react';
import OneTask from './OneTask';

import { changeInfoToObj } from '../utils/utilFunctions';
import { connect } from 'react-redux';
import action from '../store/action';
const ReportComponent = React.memo(function Report({ reportInfo, saveReport, disabled }) {
  return (
    <div>
      <span style={{ fontSize: 18, fontWeight: '600' }}>Reports:</span>
      <br />
      {reportInfo.map((info, index) => (
        <OneTask key={index}>
          <span>{info} </span>
          <button
            disabled={disabled}
            onClick={() => {
              saveReport(changeInfoToObj(info));
            }}
          >
            Save
          </button>
        </OneTask>
      ))}
    </div>
  );
});

//saveReport from redux action
const mapSaveToProps = { saveReport: action.reports.saveReport };
export default connect(null, mapSaveToProps)(ReportComponent);
