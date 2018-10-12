import { takeLatest, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* deleteComment({ payload }) {
    const { id } = payload
    yield sendRequest(id)    
}

function* sendRequest(id) {
    yield call(fetch, `${urlServer}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
    }) 
}

export default function* () {
    yield takeLatest('DELETE_COMMENT', deleteComment)
}