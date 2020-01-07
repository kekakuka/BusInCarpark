//Parking Size
export const sideLength = 5;

function createValidXandY(sideLength) {
  const result = [];
  for (let i = 0; i < sideLength; i++) {
    result.push(i);
  }
  return result;
}

export const validXandY = createValidXandY(sideLength);

/**the last options is for testing this rule:
The bus must not exit the carpark during movement. 
This also includes the initial placement of the bus.**/
function createOptionsXandY(sideLength) {
  const result = [];
  for (let i = 0; i < sideLength; i++) {
    result.push({ label: i.toString(), value: i });
  }
  result.push({ label: 'X', value: 'Wrong' });
  return result;
}
export const optionsXandY = createOptionsXandY(sideLength);

export const optionsF = [
  { label: 'NORTH', value: 0 },
  { label: 'EAST', value: 1 },
  { label: 'SOUTH', value: 2 },
  { label: 'WEST', value: 3 },
  { label: 'Invalid', value: 'Wrong' }
];

export const validCommands = ['place', 'move', 'report', 'left', 'right'];
export const validF = [0, 1, 2, 3];

//user can change speed for the bus
export const optionsSpeed = [
  { label: 'Speed*1', value: 8 },
  { label: 'Speed*2', value: 4 },
  { label: 'Speed*4', value: 2 },
  { label: 'Speed*8', value: 1 },
  { label: 'Skip', value: 0 }
];

export const unitTime = 100;
