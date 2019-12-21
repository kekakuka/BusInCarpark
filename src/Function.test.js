import {
  getFaceString,
  isValidPlace,
  createValidCommandArray,
  delByIndex,
  isValidCommand,
  convertCommandToString
} from './utils/utilFunctions';

test('getFaceString function', () => {
  expect(getFaceString(0)).toBe('NORTH');
  expect(getFaceString(1)).toBe('EAST');
  expect(getFaceString(2)).toBe('SOUTH');
  expect(getFaceString(3)).toBe('WEST');
  expect(getFaceString(null)).toBe('Wrong Face');
  expect(getFaceString('1')).toBe('Wrong Face');
});

test('isValidPlace function', () => {
  expect(isValidPlace(1, 2, 3)).toBeTruthy();
  expect(isValidPlace(0, 0, 0)).toBeTruthy();
  expect(isValidPlace(4, 5, 6)).toBeFalsy();
  expect(isValidPlace(4, 1)).toBeFalsy();
  expect(isValidPlace('1', 4, 1)).toBeFalsy();
  expect(isValidPlace(null, 4, 1)).toBeFalsy();
});

test('createValidCommandArray  function', () => {
  expect(createValidCommandArray(1, 2, 3)).toEqual([]);
  expect(createValidCommandArray([123, 456, ['place']])).toEqual([['place']]);
  expect(createValidCommandArray([123, 456, ['plac']])).toEqual([]);
});

test('delByIndex  function', () => {
  expect(delByIndex(1, 2, 3)).toEqual([]);
  expect(delByIndex([1], 2, 3)).toEqual([1]);
  expect(delByIndex([1, 3, 4], 0)).toEqual([3, 4]);
  expect(delByIndex([1, 3, 4], '1')).toEqual([1, 4]);
  expect(delByIndex([1, 3, 4], null)).toEqual([]);
});

test('isValidCommand  function', () => {
  expect(isValidCommand('place')).toBeTruthy();
  expect(isValidCommand('move')).toBeTruthy();
  expect(isValidCommand('1, 2, 3')).toBeFalsy();
  expect(isValidCommand(1)).toBeFalsy();
  expect(isValidCommand(['place'])).toBeFalsy();
});

test('convertCommandToString function ', () => {
  expect(convertCommandToString(['move'])).toBe('Move');
  expect(convertCommandToString('plac')).toBe('P');
  expect(convertCommandToString(['place'])).toBe('Place X: undefined Y: undefined F: Wrong Face');
  expect(convertCommandToString(['place', 1, 3, 2])).toBe('Place X: 1 Y: 3 F: SOUTH');
});
