import React from 'react';
import OneTask from './OneTask';

export default React.memo(function Report({ reportInfo }) {
  return (
    <div>
      <span>Reports:</span>
      <br />
      {reportInfo.map((info, index) => (
        <OneTask key={index}>
          <span>{info} </span>
        </OneTask>
      ))}
    </div>
  );
});
