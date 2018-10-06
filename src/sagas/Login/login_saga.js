import { LOGIN_PROCCESS_ASYNC } from '../../actions/Login'
import {put, takeLatest } from 'redux-saga/effects'

function* loginAsync({ payload }) {
    yield put({ type: LOGIN_PROCCESS_ASYNC, payload })
}

export default function* () {
    yield takeLatest('LOGIN_USER', loginAsync)
}