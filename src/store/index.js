import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlewate from 'redux-saga';
import reduxThunk from 'redux-thunk';
import rootReducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddlewate();

const store = createStore(
    rootReducers,
    applyMiddleware(reduxThunk, sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;