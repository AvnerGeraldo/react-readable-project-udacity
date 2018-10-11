import { FAIL_GET_POSTS_ASYNC } from '../../actions/Posts'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* deletePost({ payload }) {
    const { id } = payload
    yield sendRequest(id)    
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

export default function* () {
    yield takeLatest('DELETE_POST', deletePost)
}