import { GET_POST_BY_ID_ASYNC, FAIL_GET_POST_BY_ID_ASYNC } from '../../actions/Posts'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* getDataPostById({ payload: { id } }) {
    const data = yield fetchData(id)
    yield put({ type: GET_POST_BY_ID_ASYNC, payload: { data }})
}

function* fetchData(id) {
    try{
        const response = yield call(fetch, `${urlServer}/posts/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })

        const data = yield call([response, "json"])
        return data
    } catch (error) {
        yield put({ type: FAIL_GET_POST_BY_ID_ASYNC, payload: { error }})
    }
}

export default function* () {
    yield takeLatest('GET_POST_BY_ID', getDataPostById)
}