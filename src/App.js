import React, { useState } from 'react';
import useBusHooks from './customHooks/useBusHooks';
import useSelect from './customHooks/useSelect';
function App() {
  const { bus, position } = useBusHooks();
  const [commandArray, setCommandArray] = useState([]);
  const [reportInfo, setReportInfo] = useState('');
  const x = useSelect(0);
  const y = useSelect(0);
  const f = useSelect(0);

  function startMove(bus, commandArray) {
    commandArray.map((i, index) => {
      setTimeout(() => {
        Array.isArray(i) ? bus(...i) : bus(i);
      }, 500 * index);
    });
    setCommandArray([]);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 500, height: 500, background: '#eee', position: 'relative' }}>
        <div
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            background: 'linear-gradient(0deg,rgba(80,115,115, 0.25) 30%, rgba(90,35,35, 0.25) 95%)',
            left: position.x * 100,
            bottom: position.y * 100,
            textAlign: 'center',
            transform: `rotate(${position.f * 90}deg)`
          }}
        >
          Head
          <br />
          {reportInfo}
        </div>
      </div>
      <div>
        <span>X</span>
        <select {...x}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <span>Y</span>
        <select {...y}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <span>Face</span>
        <select {...f}>
          <option value={0}>North</option>
          <option value={1}>East</option>
          <option value={2}>South</option>
          <option value={3}>West</option>
        </select>
        <button
          onClick={() => {
            setCommandArray(commandArray => [...commandArray, ['place', x.value, y.value, f.value]]);
          }}
        >
          Place Command
        </button>
        <button
          onClick={() => {
            commandArray.length > 0 && setCommandArray(commandArray => [...commandArray, ['left']]);
          }}
        >
          Left Command
        </button>
        <button
          onClick={() => {
            commandArray.length > 0 && setCommandArray(commandArray => [...commandArray, ['right']]);
          }}
        >
          Right Command
        </button>
        <button
          onClick={() => {
            commandArray.length > 0 && setCommandArray(commandArray => [...commandArray, ['move']]);
          }}
        >
          Move Command
        </button>
        <button
          onClick={() => {
            commandArray.length > 0 && setCommandArray(commandArray => [...commandArray, ['report', setReportInfo]]);
          }}
        >
          Report Command
        </button>
        <br />
        <button
          onClick={() => {
            startMove(bus, commandArray);
          }}
        >
          Start
        </button>
        <br />
        <div>
          {commandArray.map((item, index) => (
            <span key={index}>{JSON.stringify(item)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
