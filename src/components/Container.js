import React from 'react';
export default function Container({ children }) {
  return (
    <div style={{ display: 'flex', width: '92%', marginLeft: '5%', flexWrap: 'wrap', marginTop: 10 }}>{children}</div>
  );
}
