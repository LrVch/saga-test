import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getAllUsersFail, getAllUsersSuccess } from '../actions/users'

import UserService from '../../services/user.service'

export function* getUsers() {
  try {
    const users = yield call(UserService.getAllusers)
    yield put(getAllUsersSuccess(users))
  } catch (error) {
    yield put(getAllUsersFail())
  }
}

export function* watchUsersAsync() {
  yield takeEvery('USERS_GET_ALL_USERS_REQUEST', getUsers)
}

export default function* usersSaga() {
  yield all([
    watchUsersAsync()
  ])
}