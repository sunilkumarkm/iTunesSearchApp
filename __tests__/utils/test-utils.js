import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {store as appStore} from '../../app/utils/store';

const mockStore = configureStore([]);
const store = mockStore(appStore.getState());

const reduxRender = (ui, ...others) => {
  return render(ui, {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
    ...others,
  });
};

// re-export everything for convenience
export * from '@testing-library/react-native';

// override render method
export {reduxRender as render, store};
