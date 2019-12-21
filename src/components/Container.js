import React from 'react';
export default function Container({ children }) {
  return <div style={{ display: 'flex', width: '90%', marginLeft: '5%' }}>{children}</div>;
}
