import { FAIL_SAVE_CREATE_POST_ASYNC } from '../../actions/CreatePostModal'
import { takeLatest, put, call } from 'redux-saga/effects'
import { token, urlServer } from '../../helpers/helpFetch'
import moment from 'moment'

function* createPost({ payload }) {
    try {
        const { author, title, category, postText, sortFilter, filterColumn, id } = payload

        yield sendRequest(author, title, category, postText, id)
        yield requestUpdateData(sortFilter, filterColumn)
    } catch(error) {
        yield put({ 
            type: FAIL_SAVE_CREATE_POST_ASYNC, 
            payload: { 
                error
            }
        })
    }
}

function* sendRequest(author, title, category, postText, id = '') {    
    let urlToSend = `${urlServer}/posts`
    let method = 'POST'
    let body = {}
    
    if (id) {
        urlToSend = `${urlServer}/posts/${id}`
        method = 'PUT'
        body = {
            title,
            body: postText,
        }
    } else {
        const timestamp = parseInt(moment().format('x'))
        body = {
            id: btoa(`${timestamp}${author}${category}`),
            timestamp,
            title,
            body: postText,
            author: author.toLowerCase(),
            category
        }
    }

    yield call(fetch, urlToSend, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(body)
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
    yield takeLatest('CREATE_POST', createPost)
}