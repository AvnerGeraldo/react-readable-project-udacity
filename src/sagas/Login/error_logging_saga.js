import { LOGIN_FAIL_ASYNC } from '../../actions/Login'
import { put, takeLatest } from 'redux-saga/effects'

function* loginFailAsync({ payload }) {
    yield put({ type: LOGIN_FAIL_ASYNC, payload})
}

export default function* () {
    yield takeLatest('LOGIN_FAIL', loginFailAsync)
}