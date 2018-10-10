import { INITIAL_DATA_EDIT_POST_ASYNC } from '../../actions/Posts'
import { takeLatest, put } from 'redux-saga/effects'

function* getInitialData() {
    yield put({ type: INITIAL_DATA_EDIT_POST_ASYNC })
}

export default function* () {
    yield takeLatest('INITIAL_DATA_EDIT_POST', getInitialData)
}