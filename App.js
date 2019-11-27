import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import Main from './App/Main';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
