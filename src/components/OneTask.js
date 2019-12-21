import React from 'react';
export default function Container({ children }) {
  return (
    <div
      style={{
        border: '1px solid #eee',
        marginTop: 3,
        width: '90%',
        borderRadius: 3,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '5px 2px  rgba(155, 155, 155, .5)'
      }}
    >
      {children}
    </div>
  );
}
