export const USERS_GET_ALL_USERS_REQUEST = 'USERS_GET_ALL_USERS_REQUEST'
export const USERS_GET_ALL_USERS_SUCCESS = 'USERS_GET_ALL_USERS_SUCCESS'
export const USERS_GET_ALL_USERS_FAIL = 'USERS_GET_ALL_USERS_FAIL'
export const USERS_SET_SELECTED_USER = 'USERS_SET_SELECTED_USER'
export const USERS_CLEAR_SELECTED_USER = 'USERS_CLEAR_SELECTED_USER'
export const USERS_GET_USER_ALBUMS_REQUEST = 'USERS_GET_USER_ALBUMS_REQUEST'
export const USERS_GET_USER_ALBUMS_SUCCESS = 'USERS_GET_USER_ALBUMS_SUCCESS'
export const USERS_GET_USER_ALBUMS_FAIL = 'USERS_GET_USER_ALBUMS_FAIL'
export const USERS_GET_USER_POSTS_REQUEST = 'USERS_GET_USER_POSTS_REQUEST'
export const USERS_GET_USER_POSTS_SUCCESS = 'USERS_GET_USER_POSTS_SUCCESS'
export const USERS_GET_USER_POSTS_FAIL = 'USERS_GET_USER_POSTS_FAIL'
export const USERS_CLEAR_CONTENT = 'USERS_CLEAR_CONTENT'
export const USERS_SET_SHOWING = 'USERS_SET_SHOWING'

export const getAllUsersRequest = () => ({
  type: USERS_GET_ALL_USERS_REQUEST
})

export const getAllUsersSuccess = (users) => ({
  type: USERS_GET_ALL_USERS_SUCCESS,
  payload: { users }
})

export const getAllUsersFail = () => ({
  type: USERS_GET_ALL_USERS_FAIL
})

export const usersSetSelecteduser = (id) => ({
  type: USERS_SET_SELECTED_USER,
  payload: { id }
})

export const usersClearSelecteduser = () => ({
  type: USERS_CLEAR_SELECTED_USER
})

export const usersGetUserAlbumsRequest = (id) => ({
  type: USERS_GET_USER_ALBUMS_REQUEST,
  payload: { id }
})

export const usersGetUserAlbumsSuccess = (albums) => ({
  type: USERS_GET_USER_ALBUMS_SUCCESS,
  payload: { albums }
})

export const usersGetUserAlbumsFail = () => ({
  type: USERS_GET_USER_ALBUMS_FAIL
})

export const usersGetUserPostsRequest = (id) => ({
  type: USERS_GET_USER_POSTS_REQUEST,
  payload: { id }
})

export const usersGetUserPostsSuccess = (posts) => ({
  type: USERS_GET_USER_POSTS_SUCCESS,
  payload: { posts }
})

export const usersGetUserPostsFail = () => ({
  type: USERS_GET_USER_POSTS_FAIL
})

export const usersClearContent = () => ({
  type: USERS_CLEAR_CONTENT
})

export const usersSetShowing = (type) => ({
  type: USERS_SET_SHOWING,
  payload: { type }
})



