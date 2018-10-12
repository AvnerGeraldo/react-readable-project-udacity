import { GET_ALL_COMMENTS_POST_BY_ID_ASYNC, FAIL_GET_ALL_COMMENTS_POST_BY_ID_ASYNC } from '../../actions/Comments'
import { takeEvery, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'
import filteringData from '../../helpers/filteringData'

function* getAllCommentsByIdPost({ payload: { id }}) {
    const data = yield fetchData(id)    
    yield put({ 
        type: GET_ALL_COMMENTS_POST_BY_ID_ASYNC, 
        payload: {
            data: filteringData('down', 'voteScore', data)
        }
    })
}

function* fetchData(id) {
    try{
        const response = yield call(fetch, `${urlServer}/posts/${id}/comments`, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })

        const data = yield call([response, "json"])
        return data
    } catch (error) {
        yield put({ type: FAIL_GET_ALL_COMMENTS_POST_BY_ID_ASYNC, payload: { error }})
    }
}

export default function* () {
    yield takeEvery('GET_ALL_COMMENTS_POST_BY_ID', getAllCommentsByIdPost)
}