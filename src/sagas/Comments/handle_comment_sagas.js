import { takeLatest, call } from 'redux-saga/effects'
import moment from 'moment'
import { token, urlServer } from '../../helpers/helpFetch'

function* handleComentInsertUpdate({ payload }) {
    const { idPost, idComment, body, author } = payload
    const timestamp = parseInt(moment().format('x'))
    
    if (idComment) {
        yield sendRequestUpdate(idComment, timestamp, body)
        return
    }

    yield sendRequestInsert(idPost, body, author, timestamp)
}

function* sendRequestUpdate(id, timestamp, body) {
    yield call(fetch, `${urlServer}/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            timestamp,
            body
        }),
    }) 
}

function* sendRequestInsert(idPost, body, author, timestamp) {
    yield call(fetch, `${urlServer}/comments`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            id: btoa(`${idPost}${author}${timestamp}`),
            timestamp,
            body,
            author,
            parentId: idPost
        }),
    }) 
}

export default function* () {
    yield takeLatest('HANDLE_COMMENT', handleComentInsertUpdate)
}