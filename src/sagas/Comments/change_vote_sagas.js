import { takeEvery, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* updateVoteScore({ payload }) {
    const { id, voteChange } = payload
    yield sendRequest(id, voteChange)
}

function* sendRequest(id, vote) {
    yield call(fetch, `${urlServer}/comments/${id}`, {
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
    yield takeEvery('CHANGE_VOTE_COMMENT', updateVoteScore)
}