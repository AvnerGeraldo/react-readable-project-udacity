import { FAIL_GET_POSTS_ASYNC } from '../../actions/Posts'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* updateVoteScore({ payload }) {
    const { id, voteChange } = payload
    yield sendRequest(id, voteChange)
}

function* sendRequest(id, vote) {
    yield call(fetch, `${urlServer}/posts/${id}`, {
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

export default function* () {
    yield takeLatest('CHANGE_VOTE', updateVoteScore)
}