import { OPEN_CREATE_POST_MODAL_ASYNC, CLOSE_CREATE_POST_MODAL_ASYNC } from '../../actions/CreatePostModal'
import { takeLatest, put } from 'redux-saga/effects'

function* openModalAsync() {
    yield put({ type: OPEN_CREATE_POST_MODAL_ASYNC })
}
export function* watchOpenModalCreatePost() {
    yield takeLatest('OPEN_MODAL_CREATE_POST', openModalAsync)
}

function* closeModalAsync() {
    yield put({ type: CLOSE_CREATE_POST_MODAL_ASYNC })
}
export function* watchCloseModalCreatePost() {
    yield takeLatest('CLOSE_MODAL_CREATE_POST', closeModalAsync)
}