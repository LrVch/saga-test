export const USERS_GET_ALL_USERS_REQUEST = 'USERS_GET_ALL_USERS_REQUEST'
export const USERS_GET_ALL_USERS_SUCCESS = 'USERS_GET_ALL_USERS_SUCCESS'
export const USERS_GET_ALL_USERS_FAIL = 'USERS_GET_ALL_USERS_FAIL'
export const USERS_SET_SELECTED_USER = 'USERS_SET_SELECTED_USER'
export const USERS_CLEAR_SELECTED_USER = 'USERS_CLEAR_SELECTED_USER'

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
  payload: {id}
})

export const usersClearSelecteduser = () => ({
  type: USERS_CLEAR_SELECTED_USER
})


