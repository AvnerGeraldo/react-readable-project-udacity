import { VERIFY_IF_ALREDY_LOGGED_ASYNC } from '../../actions/Login'
import { put, takeLatest } from 'redux-saga/effects'

function* verifyIfAlredyLoggedAsync() {
    yield put({ type: VERIFY_IF_ALREDY_LOGGED_ASYNC })
}

export default function* () {
    yield takeLatest('IS_LOGGED', verifyIfAlredyLoggedAsync)
}