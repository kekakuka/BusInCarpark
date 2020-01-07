import { validCommands, validF, validXandY, sideLength } from './constValues';

//get string from current face for user
export function getFaceString(f) {
  switch (f) {
    case 0:
      return 'NORTH';
    case 1:
      return 'EAST';
    case 2:
      return 'SOUTH';
    case 3:
      return 'WEST';
    default:
      return 'Wrong';
  }
}

//check x y postion and face is valid
export function isValidPlace(x, y, f) {
  return validXandY.includes(x) && validXandY.includes(y) && validF.includes(f);
}

//check commandsheet is valid and put valid command in the new array
export function createValidCommandArray(commandArray) {
  if (!Array.isArray(commandArray)) {
    return [];
  }
  return commandArray.filter(command => Array.isArray(command) && command.length > 0 && isValidCommand(command[0]));
}

//check one command string is valid
export function isValidCommand(commandString) {
  return validCommands.includes(commandString);
}

function convertPositionString(p) {
  return validXandY.includes(p) ? p : 'Wrong';
}

//ConvertCommandToString Only use in user interface.
export function convertCommandToString(command) {
  try {
    switch (command[0]) {
      case 'place':
        return `Place X: ${convertPositionString(command[1])} Y: ${convertPositionString(
          command[2]
        )} F: ${getFaceString(command[3])}`;
      default:
        return command[0].replace(/^\S/, s => s.toUpperCase());
    }
  } catch (err) {
    return 'Wrong command';
  }
}

//delete one item from array by index
export function delByIndex(arr, index) {
  if (!Array.isArray(arr) || (!index && index !== 0) || isNaN(index)) {
    return [];
  }
  return [...arr.slice(0, index), ...arr.slice(Number(index) + 1)];
}

//create random task for testing the bus in User Interface
function createRandomTask(f) {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return ['right'];
    case 1:
      return ['left'];
    case 2:
      return ['move'];
    case 3:
      return ['report', f];
    default:
      return [
        'place',
        Math.floor(Math.random() * (sideLength + 0.3)), //have change add invalid place command
        Math.floor(Math.random() * (sideLength + 0.3)),
        Math.floor(Math.random() * 4.3)
      ];
  }
}
export function pushRandomTasks(f) {
  const tasks = [];
  for (let i = 0; i < 10; i++) {
    tasks.push(createRandomTask(f));
  }
  return tasks;
}

//get x,y,f string to obj
export function changeInfoToObj(info) {
  let [x, y, f] = info.split(',');
  return {
    x: Number(x),
    y: Number(y),
    f
  };
}
