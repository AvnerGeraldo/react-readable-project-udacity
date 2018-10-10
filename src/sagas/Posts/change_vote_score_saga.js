import { FAIL_GET_ALL_POSTS_ASYNC } from '../../actions/Posts'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* updateVoteScore({ payload }) {
    try {
        const { id, voteChange, sortFilter, filterColumn } = payload

        yield sendRequest(id, voteChange)
        yield requestUpdateData(sortFilter, filterColumn)
    } catch(error) {
        yield put({ type: FAIL_GET_ALL_POSTS_ASYNC, payload: { error }})
    }
}

function* sendRequest(id, vote) {
    console.log(`${urlServer}/posts/${id}`, token, vote)
    const response = yield call(fetch, `${urlServer}/posts/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            'option': vote
        }),
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
    yield takeLatest('CHANGE_VOTE', updateVoteScore)
}