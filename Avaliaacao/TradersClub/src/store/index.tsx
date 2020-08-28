import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), console.tron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
