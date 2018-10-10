import { GET_ALL_POSTS_ASYNC, FAIL_GET_POSTS_ASYNC } from '../../actions/Posts'
import { token, urlServer } from '../../helpers/helpFetch'
import { takeLatest, put, call } from 'redux-saga/effects'
import filteringData from '../../helpers/filteringData'

function* fetchData() {
    try{
        const response = yield call(fetch, `${urlServer}/posts`, {
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

function* getDataByFiltering({ payload }) {
    const response = yield fetchData()
    
    if (response.error) {
        yield put({ 
            type: FAIL_GET_POSTS_ASYNC, 
            payload: {
                data: [],
                error: response.error
            }
        })
        
        return
    }

    yield put({ 
        type: GET_ALL_POSTS_ASYNC, 
        payload: {
            data: filteringData(payload.sortFilter, payload.filterColumn, response.data)
        }
    })   
}

export default function* () {
    yield takeLatest('GET_ALL_POSTS', getDataByFiltering)
}