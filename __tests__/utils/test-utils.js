import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const reduxRender =(
    ui,
    {
      initialState,
      store = mockStore(initialState),
      ...options
    } = {}
  ) => {
    return render(ui, {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        ...options
      });
  }

// re-export everything for convenience
export * from '@testing-library/react-native';

// override render method
export { reduxRender as render};
