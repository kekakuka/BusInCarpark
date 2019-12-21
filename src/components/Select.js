import React from 'react';
export default function Select({ selectLabel, selectHook, options, length = 1 }) {
  return (
    <div style={{ borderRadius: 5, display: 'flex', alignItems: 'center' }}>
      <div>{selectLabel}</div>
      <select
        style={{
          marginLeft: 10,
          border: 'none',
          outline: 'none',
          width: 35 * length,
          height: 30,
          lineHeight: 30,
          appearance: 'none'
        }}
        {...selectHook}
      >
        {options.map(({ label, value }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
