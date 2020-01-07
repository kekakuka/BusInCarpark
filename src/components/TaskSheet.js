import React from 'react';
import OneTask from './OneTask';
import { convertCommandToString } from '../utils/utilFunctions';
export default function TaskSheet({ commandArray, commandResultArraY, highlight, removeCommand, loading }) {
  return (
    <div style={{ marginLeft: 10, width: 330 }}>
      {commandArray.length > 0 ? (
        <>
          <span style={{ fontSize: 18, fontWeight: '600' }}>Tasks Sheet:</span>
          <br />
          {commandArray.map((command, index) => (
            <OneTask key={index}>
              <span style={{ background: highlight === index && '#c0e0a9' }}>{convertCommandToString(command)}</span>
              <input
                disabled={loading}
                defaultChecked
                type='checkbox'
                onClick={e => {
                  e.preventDefault();
                  removeCommand(index);
                }}
              />
            </OneTask>
          ))}
        </>
      ) : (
        <>
          <span style={{ fontSize: 18, fontWeight: '600' }}> Tasks Sheet Result:</span>
          <br />
          {commandResultArraY.map(({ isValid, command }, index) => (
            <OneTask key={index}>
              <span style={{ color: isValid ? '#6e6f00' : '#8e2333' }}>
                {convertCommandToString(command)} {isValid ? 'Success' : 'Failed'}
              </span>
              <br />
            </OneTask>
          ))}
        </>
      )}
    </div>
  );
}
