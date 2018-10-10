import { FAIL_GET_ALL_POSTS_ASYNC } from '../../actions/Posts'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* deletePost({ payload }) {
    try {
        const { id, sortFilter, filterColumn } = payload

        yield sendRequest(id)
        yield requestUpdateData(sortFilter, filterColumn)
    } catch(error) {
        yield put({ type: FAIL_GET_ALL_POSTS_ASYNC, payload: { error }})
    }
}

function* sendRequest(id) {
    yield call(fetch, `${urlServer}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
    }) 
}

function* requestUpdateData(sortFilter, filterColumn) {
    yield put({ 
        type: 'GET_ALL_POSTS', 
        payload: {
            sortFilter, 
            filterColumn
        }
    })
}

export default function* () {
    yield takeLatest('DELETE_POST', deletePost)
}