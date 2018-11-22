import { call, put, takeEvery, all, fork } from 'redux-saga/effects'

import { REQUEST_TEST,RECEIVE_TEST } from '../reducers/test';

function* test(){
  yield takeEvery(REQUEST_TEST, function* ({ payload, resolve, reject }) {
    try {
      yield put({
        type: RECEIVE_TEST,
        data: 'request success'
      })
      resolve && resolve(response)
    } catch (error) {
      yield put({
        type: RECEIVE_TEST,
        data:'request fail'
      })
      reject && reject(error)
    }
  })
}

export default function* testFolw() {
  yield all([
    fork(test)
  ])
}