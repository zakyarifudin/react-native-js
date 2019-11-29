import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducers';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  compose(applyMiddleware(...middlewares)),
  //composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export {store};
