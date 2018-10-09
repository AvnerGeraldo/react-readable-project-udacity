import { GET_FILTERS_ASYNC } from '../../actions/PostsFilter'
import { put, takeLatest } from 'redux-saga/effects'

function* getFiltersAsync() {
    yield put({ type: GET_FILTERS_ASYNC })
}

export default function* () {
    yield takeLatest('GET_FILTERS', getFiltersAsync)
}