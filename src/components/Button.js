import React from 'react';
export default function Button({ onClick, text, start, disabled }) {
  return (
    <button
      style={{
        background: disabled
          ? 'linear-gradient(45deg,rgba(140,140,140, 0.9) 30%, rgba(180,180,180, 0.9) 90%)'
          : start
          ? 'linear-gradient(45deg,rgba(140,20,40, 0.9) 30%, rgba(100,32,59, 0.9) 90%)'
          : 'linear-gradient(45deg,rgba(40,30,40, 0.9) 30%, rgba(80,72,109, 0.9) 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '1px 2px 2px 2px rgba(155, 155, 155, .5)',
        color: '#eee',
        height: 30,
        fontSize: 15,
        padding: '0 10px',
        marginRight: 20,
        width: 90,
        marginBottom: 6
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
