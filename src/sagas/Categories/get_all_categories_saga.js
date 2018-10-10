import { GET_ALL_CATEGORIES_ASYNC } from '../../actions/Category'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'

function* getCategoriesAsync() {
    const payload = yield fetchData()

    yield put({ type: GET_ALL_CATEGORIES_ASYNC, payload })
}

function* fetchData() {
    try{
        const response = yield call(fetch, `${urlServer}/categories`, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })

        const data = yield call([response, "json"])     

        return { data }
    } catch (error) {
        return { 
            data: [],
            error
        }
    }
}

export default function* () {
    yield takeLatest('GET_ALL_CATEGORIES', getCategoriesAsync)
}