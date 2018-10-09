import { combineReducers } from 'redux'

//Reducers
import login from './Login'
import posts from './Posts'
import filters from './PostsFilter'

export default combineReducers({
    login,
    posts,
    filters,
})