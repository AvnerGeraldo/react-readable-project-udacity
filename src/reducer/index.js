import { combineReducers } from 'redux'

//Reducers
import login from './Login'
import posts from './Posts'
import filters from './PostsFilter'
import createPostModal from './CreatePostModal'
import categories from './Category'

export default combineReducers({
    login,
    posts,
    filters,
    createPostModal,
    categories
})