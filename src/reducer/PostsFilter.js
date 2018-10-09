import { CHANGE_FILTERS_ASYNC, GET_FILTERS_ASYNC } from '../actions/PostsFilter'

const initialState = {
    valueFilter: 'voteScore',
    sortFilter: 'up'
}

export default (state = initialState, { type, payload }) => {    
    switch(type) {
        case CHANGE_FILTERS_ASYNC:
            return {
                ...state,
                valueFilter: payload.valueFilter,
                sortFilter: payload.sortFilter
            }
        case GET_FILTERS_ASYNC:
            return {
                ...state,
                ...initialState,
            }
        default:
            return state
    }
}