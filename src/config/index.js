import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Sagas
import rootSaga from '../sagas/rootSaga'

//Reducer
import reducer from '../reducer'

//Create Store
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

//Run saga
sagaMiddleware.run(rootSaga)

export default store