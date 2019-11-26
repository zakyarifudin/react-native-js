import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import Calculator from './App/Modules/CalculatorRedux/Calculator';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Calculator />
      {/* <CobaChart /> */}
    </Provider>
  );
};

export default App;
