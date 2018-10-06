//Action
import { VERIFY_IF_ALREDY_LOGGED_ASYNC, LOGIN_PROCCESS_ASYNC, LOGIN_FAIL_ASYNC, LOGOUT_ASYNC } from '../actions/Login'

//Initial State
const initialState = {
    isLogged: false,
    authorLogged: ''
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case VERIFY_IF_ALREDY_LOGGED_ASYNC:
            if (localStorage.getItem('author')) {
                return {
                    ...state,
                    isLogged: true,
                    authorLogged: localStorage.getItem('author')
                }
            }
            break;
        case LOGIN_PROCCESS_ASYNC:
            if (payload.author) {
                return {
                    ...state,
                    isLogged: true,
                    authorLogged: payload.author
                }
            }
            break;
        case LOGIN_FAIL_ASYNC:
            return {
                ...state,
                isLogged: false,
                authorLogged: '',
                msmError: payload.error || ''
            }
        case LOGOUT_ASYNC:
            //DELETING LOCAL STORAGE
            (localStorage.getItem('author')) && localStorage.clear()
            break;
        default:
            return state
    }

    return initialState
}