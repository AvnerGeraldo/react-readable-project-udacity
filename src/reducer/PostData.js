import { GET_POST_BY_ID_ASYNC, FAIL_GET_POST_BY_ID_ASYNC } from '../actions/Posts'

const initialData = {
    data: []
}

export default (state = initialData, { type, payload}) => {
    switch(type) {
        case GET_POST_BY_ID_ASYNC:
            return {
                ...state,
                data: payload.data
            }
        case FAIL_GET_POST_BY_ID_ASYNC:
            return {
                ...state,
                data: [],
                error: payload.error
            }        
        default:
            return state
    }
}