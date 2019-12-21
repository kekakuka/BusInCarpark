import React from 'react';
export default function ParkingAndBus({ position: { x = 0, y = -1, f = 0 } }) {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        background: 'url(' + require('../static/images/Parking.png') + ')',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          background: 'url(' + require('../static/images/Bus.png') + ')',
          left: x * 60,
          bottom: y * 60,
          textAlign: 'center',
          transform: `rotate(${f * 90}deg)`
        }}
      >
        {y === -1 && 'Out Of Parking'}
      </div>
    </div>
  );
}
