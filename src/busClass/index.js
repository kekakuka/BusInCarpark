import { getFaceString, isValidPlace, createValidCommandArray } from '../utils/utilFunctions';
import { unitTime, sideLength } from '../utils/constValues';

//Using immediately invoke function expression that only exposure {getPosition, takeTaskSheet}
export default (function busRobot() {
  //private varibles of bus are not exposured
  let _x = undefined;
  let _y = undefined;
  let _f = undefined;

  //place the bus
  function place(x, y, f) {
    if (!isValidPlace(x, y, f)) {
      return false;
    }
    _x = x;
    _y = y;
    _f = f;
    return true;
  }

  //_f 0 for North, 1 for East, 2 for South, 3 for West
  function left() {
    if (!isValidPlace(_x, _y, _f)) {
      return false;
    }
    _f = (_f + 3) % 4;
    return true;
  }

  function right() {
    if (!isValidPlace(_x, _y, _f)) {
      return false;
    }
    _f = (_f + 1) % 4;
    return true;
  }

  //move forward one unit
  function move() {
    let result = false;
    if (isValidPlace(_x, _y, _f)) {
      switch (_f) {
        case 0:
          result = _y + 1 <= sideLength - 1;
          result && _y++;
          break;
        case 1:
          result = _x + 1 <= sideLength - 1;
          result && _x++;
          break;
        case 2:
          result = _y - 1 >= 0;
          result && _y--;
          break;
        case 3:
          result = _x - 1 >= 0;
          result && _x--;
          break;
        default:
          return result;
      }
    }
    return result;
  }

  //report the position of the bus
  function report(callback) {
    //check report method which should be a function such as alert or console.log
    if (!isValidPlace(_x, _y, _f) && typeof callback === 'function') {
      return false;
    }
    //make sure callback is a report method
    try {
      callback(`${_x},${_y},${getFaceString(_f)}`);
    } catch (err) {
      return false;
    }
    return true;
  }

  /**the bus object can run command by command string bus[commandString]
  each command should check the bus is in the parking 
  and return a result to show the command result**/
  const bus = { place, move, report, left, right };

  //reset bus
  function resetBus() {
    _x = undefined;
    _y = undefined;
    _f = undefined;
  }

  //get the postion of the bus
  function getPosition() {
    return { x: _x, y: _y, f: _f };
  }

  /**take an array of command
  invoke function use timeout for better user experience**/
  function takeTaskSheet(commandArray, callback, speed = 0) {
    //remove invalid command
    const validCommandArray = createValidCommandArray(commandArray);
    validCommandArray.forEach((command, index) => {
      //use setTimeOut control the callback
      setTimeout(() => {
        const [commandString, ...restParams] = command;
        const isValid = bus[commandString](...restParams);
        //run callback after move for tracking the bus position and task
        callback && typeof callback === 'function' && callback(index, isValid, command);
      }, unitTime * index * speed);
    });
    //reset bus after tasks finished
    setTimeout(resetBus, unitTime * validCommandArray.length * speed + 1);
  }

  /**take an array of command
  invoke function without timeout**/
  function takeTaskSheetSync(commandArray, callback) {
    //remove invalid command
    const validCommandArray = createValidCommandArray(commandArray);
    validCommandArray.forEach((command, index) => {
      const [commandString, ...restParams] = command;
      const isValid = bus[commandString](...restParams);
      //run callback after move for tracking the bus position and task
      callback && typeof callback === 'function' && callback(index, isValid, command);
    });
    //reset bus after tasks finished
    resetBus();
  }

  return { getPosition, takeTaskSheet, takeTaskSheetSync };
})();
