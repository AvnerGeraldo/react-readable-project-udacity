import { LOGOUT_ASYNC } from '../../actions/Login'
import { put, takeLatest } from 'redux-saga/effects'

function* logoutAsync() {
    yield put({ type: LOGOUT_ASYNC })
}

export default function* () {
    yield takeLatest('LOGOUT', logoutAsync)
}