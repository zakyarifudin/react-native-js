import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import {mapping, dark} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
//import Calculator from './App/Modules/CalculatorRedux/Calculator';
import Home from './App/Modules/Home/Home';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={dark}>
        <Home />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
