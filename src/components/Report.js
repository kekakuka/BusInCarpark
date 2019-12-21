import React from 'react';
import OneTask from './OneTask';

export default function Report({ reportInfo }) {
  return (
    <div>
      <span style={{ fontSize: 18, fontWeight: '600' }}>Reports:</span>
      <br />
      {reportInfo.map((info, index) => (
        <OneTask key={index}>
          <span>{info} </span>
        </OneTask>
      ))}
    </div>
  );
}
