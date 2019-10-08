import { all } from 'redux-saga/effects'
import uiSaga from './ui'
import usersSaga from './users'

export default function* rootSaga() {
  yield all([
    uiSaga(),
    usersSaga()
  ])
}