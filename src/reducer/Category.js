import { GET_ALL_CATEGORIES_ASYNC } from '../actions/Category'


export default (state = {}, { type, payload }) => {
    switch(type) {
        case GET_ALL_CATEGORIES_ASYNC:
            return {
                ...state,
                ...payload.data
            }        
        default:
            return state
    }
}