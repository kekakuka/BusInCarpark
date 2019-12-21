import { getFaceString, isValidPlace, createValidCommandArray } from '../utils/utilFunctions';
import { unitTime } from '../utils/constValues';

//Using immediately invoke function expression that only exposure {getPosition, takeTaskSheet}
export default (function busRobot() {
  //varibles of bus are not exposured
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
          result = _y + 1 <= 4;
          result && _y++;
          break;
        case 1:
          result = _x + 1 <= 4;
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
    } catch {
      return false;
    }
    return true;
  }

  //the bus object can run command by command string bus[commandString]
  //each command should check the bus is in the parking and return a result to show the command result
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

  //take an array of command
  //invoke function use timeout for better user experience
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

  //take an array of command
  //invoke function without timeout
  function takeTaskSheetSync(commandArray, callback) {
    //remove invalid command
    const validCommandArray = createValidCommandArray(commandArray);
    validCommandArray.forEach((command, index) => {
      const [commandString, ...restParams] = command;
      const isValid = bus[commandString](...restParams);
      //run callback after move for tracking the bus position and task
      callback && typeof callback === 'function' && callback(index, isValid, command);
    });
    resetBus();
  }

  return { getPosition, takeTaskSheet, takeTaskSheetSync };
})();

// class Bus {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     this.f = 0;
//   }

//   place(x, y, f) {
//     this.x = x;
//     this.y = y;
//     this.f = f;
//   }

//   left() {
//     this.f = (this.f + 3) % 4;
//   }

//   right() {
//     this.f = (this.f + 1) % 4;
//   }

//   move() {
//     switch (this.f) {
//       case 0:
//         this.y + 1 <= 4 && this.y++;
//         break;
//       case 1:
//         this.x + 1 <= 4 && this.x++;
//         break;
//       case 2:
//         this.y - 1 >= 0 && this.y--;
//         break;
//       case 3:
//         this.x - 1 >= 0 && this.x--;
//         break;
//     }
//   }
//   report(callback) {
//     callback(`${this.x},${this.y},${getPosition(this.f)}`);
//   }
//   after(fn) {
//     const self = this;
//     return function(command, ...rest) {
//       self[command](...rest);
//       fn();
//     };
//   }
// }

// function getPosition(f) {
//   switch (f) {
//     case 0:
//       return 'NORTH';
//     case 1:
//       return 'EAST';
//     case 2:
//       return 'SOUTH';
//     case 3:
//       return 'WEST';
//   }
// }

// export default new Bus();
