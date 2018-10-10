import { INITIAL_DATA_EDIT_POST_ASYNC, EDIT_POST_ASYNC } from '../actions/Posts'

const initialState = {
    txtTitle: '',
    cboCategory: '',
    txtPostText: '',
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case EDIT_POST_ASYNC:

            return {
                ...state,
                ...payload
            }
        case INITIAL_DATA_EDIT_POST_ASYNC:
            return {
                ...initialState
            }
        default:
            return state
    }
}