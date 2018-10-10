import { GET_POSTS_BY_CATEGORY_ASYNC, FAIL_GET_POSTS_ASYNC } from '../../actions/Posts'
import { token, urlServer } from '../../helpers/helpFetch'
import { takeLatest, put, call } from 'redux-saga/effects'
import filteringData from '../../helpers/filteringData'

function* fetchData(category) {
    try{
        const response = yield call(fetch, `${urlServer}/${category}/posts`, {
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
    const response = yield fetchData(payload.category)
    
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
        type: GET_POSTS_BY_CATEGORY_ASYNC, 
        payload: {
            data: filteringData(payload.sortFilter, payload.filterColumn, response.data)
        }
    })   
}

export default function* () {
    yield takeLatest('GET_POSTS_BY_CATEGORY', getDataByFiltering)
}