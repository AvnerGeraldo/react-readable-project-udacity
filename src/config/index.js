import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Sagas
import rootSaga from '../sagas/rootSaga'

//Reducer
import reducer from '../reducer'

//Create Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
//const store = createStore(reducer, applyMiddleware(sagaMiddleware))
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

//Run saga
sagaMiddleware.run(rootSaga)

export default store