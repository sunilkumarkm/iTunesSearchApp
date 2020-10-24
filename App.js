import * as React from 'react';
import Routes from './app/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './app/utils/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
