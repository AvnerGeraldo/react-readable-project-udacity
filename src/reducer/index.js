import { combineReducers } from 'redux'

//Reducers
import login from './Login'
import posts from './Posts'

export default combineReducers({
    login,
    posts
})