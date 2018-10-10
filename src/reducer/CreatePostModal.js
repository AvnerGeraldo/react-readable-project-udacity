import { OPEN_CREATE_POST_MODAL_ASYNC, CLOSE_CREATE_POST_MODAL_ASYNC, FAIL_SAVE_CREATE_POST_ASYNC } from '../actions/CreatePostModal'

const initialState = {
    openModal: false,
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case OPEN_CREATE_POST_MODAL_ASYNC:
            return {
                ...state,
                openModal: true
            }
        case CLOSE_CREATE_POST_MODAL_ASYNC: {
            return {
                ...state,
                openModal: false
            }
        }
        case FAIL_SAVE_CREATE_POST_ASYNC: {
            return {
                ...state,
                error: payload.error                
            }
        }          
        default:
            return state
    }
}