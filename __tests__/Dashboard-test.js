import React from 'react';
import {render, cleanup, store} from './utils/test-utils';
import DashboardScreen from '../app/components/Dashboard/DasboardScreen';

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe('Testing Dashboard Screen', () => {
  it('renders as expected', () => {
    const rendered = render(<DashboardScreen />);
  });
});
