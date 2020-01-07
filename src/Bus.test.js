import bus from './busClass';

function TestBusReport(result) {
  return function(info) {
    test('Report Result', () => {
      expect(info).toBe(result);
    });
  };
}

bus.takeTaskSheetSync([
  ['place', 'a', 0, 6],
  ['move'],
  ['move'],
  ['report'],
  ['move'],
  ['move'], //above are invalid
  ['place', 0, 0, 0],
  ['report', TestBusReport('0,0,NORTH')],
  ['move'],
  ['move'],
  ['report', TestBusReport('0,2,NORTH')],
  ['left'],
  ['report', TestBusReport('0,2,WEST')],
  ['place', 'a', 0, 6], //invalid place in movement
  ['report', TestBusReport('0,2,WEST')],
  ['move'],
  ['report', TestBusReport('0,2,WEST')],
  ['right'],
  ['move'],
  ['move'],
  ['report', TestBusReport('0,4,NORTH')],
  ['move'],
  ['move'], //two useless move
  ['report', TestBusReport('0,4,NORTH')],
  ['right'],
  ['move'],
  ['move'],
  ['right'],
  ['move'],
  ['report', TestBusReport('2,3,SOUTH')],
  ['right'],
  ['report', TestBusReport('2,3,WEST')],
  ['right'],
  ['report', TestBusReport('2,3,NORTH')]
]);

//test the bus is go back
test('bus.getPosition  function', () => {
  expect(bus.getPosition()).toEqual({ x: undefined, y: undefined, f: undefined });
});

bus.takeTaskSheetSync([
  ['place', 0, 0, 9],
  ['move'],
  ['place', 0, 0, 0],
  ['report', TestBusReport('0,0,NORTH')],
  ['right'],
  ['report', TestBusReport('0,0,EAST')],
  ['move'],
  ['left'],
  ['report', TestBusReport('1,0,NORTH')],
  ['move'],
  ['report', TestBusReport('1,1,NORTH')],
  ['move'],
  ['move'],
  ['report', TestBusReport('1,3,NORTH')],
  ['move'],
  ['move'],
  ['move'],
  ['move'],
  ['report', TestBusReport('1,4,NORTH')],
  ['move'],
  ['move'],
  ['report', TestBusReport('1,4,NORTH')],
  ['right'],
  ['move'],
  ['move'],
  ['right'],
  ['move'],
  ['report', TestBusReport('3,3,SOUTH')]
]);
