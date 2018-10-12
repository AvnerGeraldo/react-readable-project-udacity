import { GET_ALL_COMMENTS_POST_BY_ID_ASYNC, FAIL_GET_ALL_COMMENTS_POST_BY_ID_ASYNC } from '../actions/Comments'

const initialState = {
    data: [],
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_ALL_COMMENTS_POST_BY_ID_ASYNC:
            return {
                ...state,
                data: payload.data
            }
        case FAIL_GET_ALL_COMMENTS_POST_BY_ID_ASYNC:
            return {
                data: [],
                error: payload.error
            }
        default:
            return state
    }
}