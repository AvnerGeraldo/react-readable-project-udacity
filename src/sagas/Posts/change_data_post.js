import { EDIT_POST_ASYNC } from '../../actions/Posts'
import { takeLatest, put } from 'redux-saga/effects'

function* changeDataPost({ payload }) {
    yield put({ type: EDIT_POST_ASYNC, payload })
}

export default function* () {
    yield takeLatest('EDIT_POST', changeDataPost)
}