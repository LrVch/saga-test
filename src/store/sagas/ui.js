import {
  USERS_GET_USER_ALBUMS_FAIL,
  USERS_GET_USER_ALBUMS_REQUEST,
  USERS_GET_USER_ALBUMS_SUCCESS,
  USERS_GET_USER_POSTS_FAIL,
  USERS_GET_USER_POSTS_REQUEST,
  USERS_GET_USER_POSTS_SUCCESS
} from '../actions/users'
import { all, call, put, select, take } from 'redux-saga/effects'
import { getAlbums, getPosts, getUsersByIds, getUsersEdge, getViewedUsers } from '../selectors/users'

import React from 'react'
import { eventChannel } from 'redux-saga'
import { toast } from 'react-semantic-toasts';
import { uiSetIsOnline } from '../actions'

function isOnlineSourceChannel() {
  return eventChannel((emit) => {
    const callbackIsOnline = function () {
      emit(true)
    }
    const callbackIsoffline = function () {
      emit(false)
    }
    window.addEventListener("online", callbackIsOnline)
    window.addEventListener("offline", callbackIsoffline)

    return () => {
      window.removeEventListener("online", callbackIsOnline)
      window.removeEventListener("offline", callbackIsoffline)
    }
  })
}

function* watchIsOnline() {
  const chan = yield call(isOnlineSourceChannel)
  while (true) {
    const isOnline = yield take(chan)
    yield put(uiSetIsOnline(isOnline))

    if (isOnline) {
      toast({
        title: 'Now you are online!!',
        description: <p>Take a chance to do somethins awesome!</p>,
        size: 'small',
      })
    } else {
      toast({
        title: 'Now you are offline (:',
        description: <p>Take a rest. Sure, soon you will be able to do somethig awesome!</p>,
        size: 'small',
        type: 'warning',
      }, () => { }, () => { }, () => { })
    }
  }
}

function* showErrorLoadingPostsNotification() {
  while (true) {
    yield take(USERS_GET_USER_POSTS_FAIL)

    toast({
      title: 'Error loading posts',
      description: <p>This is a Semantic UI toast</p>,
      size: 'small',
      type: 'warning',
    })
  }
}

function* showErrorLoadingAlbumsNotification() {
  while (true) {
    yield take(USERS_GET_USER_ALBUMS_FAIL)

    toast({
      title: 'Error loading albums',
      description: <p>This is a Semantic UI toast</p>,
      size: 'small',
      type: 'warning',
    })
  }
}

function* showSuccessLoadingPostsNotification() {
  while (true) {
    yield take(USERS_GET_USER_POSTS_REQUEST)
    const posts = yield select(getPosts)

    if (!posts.length) {
      yield take(USERS_GET_USER_POSTS_SUCCESS)
      toast({
        title: 'Posts loaded successfull',
        description: <p>This is a Semantic UI toast</p>,
        size: 'small'
      })
    }
  }
}

function* showSuccessLoadingAlbumsNotification() {
  while (true) {
    yield take(USERS_GET_USER_ALBUMS_REQUEST)
    const ablums = yield select(getAlbums)

    if (!ablums.length) {
      yield take(USERS_GET_USER_ALBUMS_SUCCESS)
      toast({
        title: 'Ablums loaded successfull',
        description: <p>This is a Semantic UI toast</p>,
        size: 'small'
      })
    }
  }
}

function* showThreeUsersNotification() {
  while (true) {
    yield take([USERS_GET_USER_POSTS_SUCCESS, USERS_GET_USER_ALBUMS_SUCCESS])
    const viewedUsers = yield select(getViewedUsers)
    const usersEdge = yield select(getUsersEdge)

    if (viewedUsers.length === usersEdge) {
      const users = yield select(getUsersByIds)
      const names = users.map(u => u.name)
      
      toast({
        title: 'Congratulatin! You have shown three users!',
        description: <p>Users: {names.join(', ')}</p>,
        size: 'massive',
        time: 3000
      })
    }
  }
}

export default function* uiSaga() {
  yield all([
    watchIsOnline(),
    showErrorLoadingPostsNotification(),
    showSuccessLoadingPostsNotification(),
    showErrorLoadingAlbumsNotification(),
    showSuccessLoadingAlbumsNotification(),
    showThreeUsersNotification()
  ])
}