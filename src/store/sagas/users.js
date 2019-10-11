import {
  USERS_CLEAR_CONTENT,
  USERS_GET_USER_ALBUMS_FAIL,
  USERS_GET_USER_ALBUMS_REQUEST,
  USERS_GET_USER_POSTS_FAIL,
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
  cancelled,
  delay,
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
  for (let i = 0; i < 5; i++) {
    try {
      const posts = yield call(UserService.getUserPosts, id)
      yield put(usersGetUserPostsSuccess(posts))
      return
    } catch (error) {
      if (i < 4) {
        yield delay(1000);
      }
    } finally {
      if (yield cancelled()) {
        break
      }
    }
  }

  const cancelResult = yield cancelled()

  if (!cancelResult) {
    yield put(usersGetUserPostsFail())
  }
}

export function* userAlbums(id) {
  for (let i = 0; i < 5; i++) {
    try {
      const albums = yield call(UserService.getUserAlbums, id)
      yield put(usersGetUserAlbumsSuccess(albums))
      return
    } catch (error) {
      if (i < 4) {
        yield delay(1000);
      }
    } finally {
      if (yield cancelled()) {
        break
      }
    }
  }

  const cancelResult = yield cancelled()

  if (!cancelResult) {
    yield put(usersGetUserAlbumsFail())

  }
}

export function* getUserPosts() {
  while (true) {
    const { payload: { id } } = yield take('USERS_GET_USER_POSTS_REQUEST')
    const existedPosts = yield select(getPosts)

    if (existedPosts.length) {
      yield put(usersGetUserPostsSuccess(existedPosts))
    } else {
      const task = yield fork(userPosts, id)
      const { type } = yield take([USERS_GET_USER_ALBUMS_REQUEST, USERS_CLEAR_CONTENT, USERS_GET_USER_POSTS_FAIL])
      if (type !== USERS_GET_USER_POSTS_FAIL) {
        yield cancel(task)
      }
    }
  }
}

export function* getUserAlbums() {
  while (true) {
    const { payload: { id } } = yield take('USERS_GET_USER_ALBUMS_REQUEST')
    const existedAlbums = yield select(getAlbums)

    if (existedAlbums.length) {
      yield put(usersGetUserAlbumsSuccess(existedAlbums))
    } else {
      const task = yield fork(userAlbums, id)
      const { type } = yield take([USERS_GET_USER_POSTS_REQUEST, USERS_CLEAR_CONTENT, USERS_GET_USER_ALBUMS_FAIL])
      if (type !== USERS_GET_USER_ALBUMS_FAIL) {
        yield cancel(task)
      }
    }
  }
}

export default function* usersSaga() {
  yield all([
    yield takeEvery('USERS_GET_ALL_USERS_REQUEST', getUsers),
    getUserAlbums(),
    getUserPosts()
  ])
}