import { createStore, applyMiddleware } from 'redux'

//Reducer
import reducer from '../reducer'

//Create Store
const store = createStore(reducer, applyMiddleware())
export default store