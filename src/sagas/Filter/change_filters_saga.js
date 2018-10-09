import { CHANGE_FILTERS_ASYNC } from '../../actions/PostsFilter'
import { put, takeLatest } from 'redux-saga/effects'


function* changeFiltersAsync({ payload }) {
    yield put({ type: CHANGE_FILTERS_ASYNC, payload })
}

export default function* () {
    yield takeLatest('CHANGE_FILTERS', changeFiltersAsync)
}