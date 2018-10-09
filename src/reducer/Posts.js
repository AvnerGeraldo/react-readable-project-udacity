import { GET_ALL_POSTS_ASYNC, FAIL_GET_ALL_POSTS_ASYNC } from '../actions/Posts'

const initialState = {
    dataPost: []
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_ALL_POSTS_ASYNC:
            return {
                ...state,
                dataPost: {
                    data: payload.data
                }
            }
        case FAIL_GET_ALL_POSTS_ASYNC: {
            return {
                ...state,
                dataPost: {
                    data: [],
                    error: payload.error
                }
            }
        }          
        default:
            return state
    }
}