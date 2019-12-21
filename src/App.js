//libraries
import React, { useState } from 'react';
//componets
import Container from './components/Container';
import ParkingAndBus from './components/ParkingAndBus';
import Button from './components/Button';
import Select from './components/Select';
import TaskSheet from './components/TaskSheet';
import Report from './components/Report';
//custom hooks
import useSelect from './customHooks/useSelect';
//bus instance
import bus from './busClass';
//config values
import { unitTime, optionsXandY, optionsF, optionsSpeed } from './utils/constValues';
//util function
import { delByIndex, createRandomTask } from './utils/utilFunctions';

export default function App() {
  const [position, setPosition] = useState(bus.getPosition());
  const [highlight, setHighlight] = useState(-1);
  const [commandArray, setCommandArray] = useState([]);
  const [reportInfo, setReportInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commandResultArraY, setCommandResultArray] = useState([]);

  const speed = useSelect(1);
  const x = useSelect(0);
  const y = useSelect(0);
  const f = useSelect(0);

  //after each command ,highlight current command, set the Result, show the new bus position,
  function afterCallback(index, isValid, command) {
    setCommandResultArray(commandResultArraY => [...commandResultArraY, { command, isValid }]);
    setHighlight(index);
    setPosition(bus.getPosition());
  }

  //loading before start clear reports
  //canncal loading and clear command after start
  function startMove() {
    console.log('Start Action: ');
    setLoading(true);
    setReportInfo([]);
    //each command from the User Interface must be in the valid format, but it action may be invalid.
    if (speed.value === 0) {
      bus.takeTaskSheetSync(commandArray, afterCallback);
    } else {
      bus.takeTaskSheet(commandArray, afterCallback, speed.value);
    }
    setTimeout(() => {
      setLoading(false);
      setCommandArray([]);
      setHighlight(-1);
    }, unitTime * commandArray.length * speed.value + 1);
  }

  //remove the command by click it
  function removeCommand(index) {
    setCommandArray(delByIndex(commandArray, index));
  }

  //create the report list and logo it
  function reportMethod(info) {
    setReportInfo(reportInfo => [...reportInfo, info]);
    console.log(info);
  }

  //create tasksheet
  function putCommand(payload) {
    //actually not in the park! Just for better looking after start
    if (position.x !== undefined) {
      setPosition(bus.getPosition());
      setCommandResultArray([]);
    }
    setCommandArray(commandArray => [...commandArray, payload]);
  }

  function createRandomTasks() {
    if (position.x !== undefined) {
      setPosition(bus.getPosition());
      setCommandResultArray([]);
    }
    setCommandArray(commandArray => [
      ...commandArray,
      createRandomTask(reportMethod),
      createRandomTask(reportMethod),
      createRandomTask(reportMethod),
      createRandomTask(reportMethod),
      createRandomTask(reportMethod),
      createRandomTask(reportMethod)
    ]);
  }

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ParkingAndBus position={position} />
        <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <Button
              disabled={loading}
              text={'Place'}
              onClick={() => {
                putCommand(['place', x.value, y.value, f.value]);
              }}
            />
            <Select selectLabel={'X: '} selectHook={x} options={optionsXandY} />
            <Select selectLabel={'Y: '} selectHook={y} options={optionsXandY} />
            <Select selectLabel={'F: '} selectHook={f} options={optionsF} length={2} />
          </div>
          <Button
            disabled={loading}
            text={'Left'}
            onClick={() => {
              putCommand(['left']);
            }}
          />
          <Button
            disabled={loading}
            text={'Right'}
            onClick={() => {
              putCommand(['right']);
            }}
          />
          <Button
            disabled={loading}
            text={'Move'}
            onClick={() => {
              putCommand(['move']);
            }}
          />
          <Button
            disabled={loading}
            text={'Report'}
            onClick={() => {
              putCommand(['report', reportMethod]);
            }}
          />
          <Button disabled={loading} text={'Add random tasks'} length={2} onClick={createRandomTasks} />
          <br />
          <div style={{ display: 'flex' }}>
            <Button text={'Start'} onClick={startMove} start disabled={loading || commandArray.length === 0} />
            <Select selectLabel={'Play Speed: '} selectHook={speed} options={optionsSpeed} length={2} />
          </div>
          <br />
        </div>
      </div>
      <TaskSheet
        commandArray={commandArray}
        commandResultArraY={commandResultArraY}
        highlight={highlight}
        removeCommand={removeCommand}
        loading={loading}
      />
      <Report reportInfo={reportInfo} />
    </Container>
  );
}
