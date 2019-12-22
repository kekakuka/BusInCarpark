export const validCommands = ['place', 'move', 'report', 'left', 'right'];
export const validXandY = [0, 1, 2, 3, 4];
export const validF = [0, 1, 2, 3];

/**the last options is for testing this rule:
The bus must not exit the carpark during movement. 
This also includes the initial placement of the bus.**/
export const optionsXandY = [
  { label: '0', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: 'X', value: 'Wrong' }
];

export const optionsF = [
  { label: 'NORTH', value: 0 },
  { label: 'EAST', value: 1 },
  { label: 'SOUTH', value: 2 },
  { label: 'WEST', value: 3 },
  { label: 'Invalid', value: 'Wrong' }
];

//user can change speed for the bus
export const optionsSpeed = [
  { label: 'Speed*1', value: 8 },
  { label: 'Speed*2', value: 4 },
  { label: 'Speed*4', value: 2 },
  { label: 'Speed*8', value: 1 },
  { label: 'Skip', value: 0 }
];

export const unitTime = 100;
