import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import {mapping, dark} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
//import Home from './App/Screen/Home/Home';
import Navigation from './App/navigation/navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={dark}>
        <Navigation />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
