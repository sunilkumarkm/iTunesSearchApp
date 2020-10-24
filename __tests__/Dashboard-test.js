import React from 'react';
import renderer from 'react-test-renderer';
import DasboardScreen from '../app/components/Dashboard/DasboardScreen';

test('DasboardScreen renders correctly', () => {
  const tree = renderer.create(<DasboardScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
