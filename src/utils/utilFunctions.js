import { validCommands, validF, validXandY } from './constValues';

//get useful info from current face
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
      return 'Wrong Face';
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

//ConvertCommandToString Only use in user interface.
export function convertCommandToString(command) {
  switch (command[0]) {
    case 'place':
      return `Place X: ${command[1]} Y: ${command[2]} F: ${getFaceString(command[3])}`;
    default:
      return command[0].replace(/^\S/, s => s.toUpperCase());
  }
}

//delete one item from array by index
export function delByIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
