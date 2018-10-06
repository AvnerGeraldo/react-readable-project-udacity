import { all } from 'redux-saga/effects'

//Watchers
//Login
import watchIsLogged from './Login/is_logged_saga'
import watchLogin from './Login/login_saga'
import watchLoginFail from './Login/error_logging_saga'
import watchLogout from './Login/logout_saga'

//Export data
export default function* () {
    yield all([
        watchIsLogged(),
        watchLogin(),
        watchLoginFail(),
        watchLogout(),
    ])
}