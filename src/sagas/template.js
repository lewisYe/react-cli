import { call, put, takeEvery, all, fork } from 'redux-saga/effects'

import { REQUEST_TEMPLATE, RECEIVE_TEMPLATE } from '~reducers/template';

import request from '~services/request'

function* template() {
  yield takeEvery(REQUEST_TEMPLATE, function* ({ payload, resolve, reject }) {
    try {
      const response = yield call(request.post, '/pms/company/list', payload)
      yield put({
        type: RECEIVE_TEMPLATE,
        data: 'request success'
      })
      resolve && resolve(response)
    } catch (error) {
      yield put({
        type: RECEIVE_TEMPLATE,
        data: 'request fail'
      })
      reject && reject(error)
    }
  })
}

export default function* templateSaga() {
  yield all([
    fork(template)
  ])
}