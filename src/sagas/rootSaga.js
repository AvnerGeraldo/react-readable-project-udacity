import { all } from 'redux-saga/effects'

//Watchers
import watchIsLogged from './Login/is_logged_saga'

//Export data
export default function* () {
    yield all([
        watchIsLogged()
    ])
}