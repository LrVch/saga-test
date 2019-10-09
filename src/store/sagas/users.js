import {
  USERS_GET_USER_ALBUMS_REQUEST,
  USERS_GET_USER_POSTS_REQUEST,
  getAllUsersFail,
  getAllUsersSuccess,
  usersGetUserAlbumsFail,
  usersGetUserAlbumsSuccess,
  usersGetUserPostsFail,
  usersGetUserPostsSuccess
} from '../actions/users'
import {
  all,
  call,
  cancel,
  fork,
  put,
  select,
  take,
  takeEvery
} from 'redux-saga/effects'
import { getAlbums, getPosts } from '../selectors/users'

import UserService from '../../services/user.service'

export function* getUsers() {
  try {
    const users = yield call(UserService.getAllusers)
    yield put(getAllUsersSuccess(users))
  } catch (error) {
    yield put(getAllUsersFail())
  }
}

export function* userPosts(id) {
  try {
    const posts = yield call(UserService.getUserPosts, id)
    yield put(usersGetUserPostsSuccess(posts))
  } catch (error) {
    console.error(error)
    yield put(usersGetUserPostsFail())
  }
}

export function* userAlbums(id) {
  try {
    const albums = yield call(UserService.getUserAlbums, id)
    yield put(usersGetUserAlbumsSuccess(albums))
  } catch (error) {
    console.error(error)
    yield put(usersGetUserAlbumsFail())
  }
}

export function* getUserPosts(action) {
  const existedPosts= yield select(getPosts)

  if (existedPosts.length) {
    return yield put(usersGetUserPostsSuccess(existedPosts))
  }

  const {id} = action.payload
  const posts = yield fork(userPosts, id)
  yield take(USERS_GET_USER_ALBUMS_REQUEST)
  yield cancel(posts)
}

export function* getUserAlbums(action) {
  const existedAlbums = yield select(getAlbums)

  if (existedAlbums.length) {
    return yield put(usersGetUserAlbumsSuccess(existedAlbums))
  }

  const {id} = action.payload
  const albums = yield fork(userAlbums, id)
  yield take(USERS_GET_USER_POSTS_REQUEST)
  yield cancel(albums)
}

export default function* usersSaga() {
  yield all([
    yield takeEvery('USERS_GET_ALL_USERS_REQUEST', getUsers),
    yield takeEvery('USERS_GET_USER_POSTS_REQUEST', getUserPosts),
    yield takeEvery('USERS_GET_USER_ALBUMS_REQUEST', getUserAlbums)
  ])
}