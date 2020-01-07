import React from 'react';

import renderer from 'react-test-renderer';
import ParkingAndBus from './components/ParkingAndBus';
import Button from './components/Button';

test('ParkingAndBus renders correctly', () => {
  const tree = renderer.create(<ParkingAndBus position={{}} />).toJSON();
  expect(tree.type).toBe('div');
  expect(tree.children[0].children[0]).toBe('Out Of Parking');
  expect(tree).toMatchSnapshot();
});

test('Button renders correctly', () => {
  const tree = renderer.create(<Button onClick={() => {}} text={'A Button'} />).toJSON();
  expect(tree.type).toBe('button');
  expect(tree.children).toEqual(['A Button']);
  expect(tree).toMatchSnapshot();
});
