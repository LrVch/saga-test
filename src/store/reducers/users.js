import * as actionsTypes from '../actions';

const initialState = {
  users: [],
  isUsersLoading: true,
  selectedUser: null
}

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.USERS_GET_ALL_USERS_REQUEST: {
      return {
        ...state,
        isUsersLoading: true
      }
    }

    case actionsTypes.USERS_GET_ALL_USERS_SUCCESS: {
      const { users } = payload
      return {
        ...state,
        users,
        isUsersLoading: false
      }
    }

    case actionsTypes.USERS_GET_ALL_USERS_FAIL: {
      return {
        ...state,
        isUsersLoading: false
      }
    }

    case actionsTypes.USERS_SET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: payload.id
      }
    }

    case actionsTypes.USERS_CLEAR_SELECTED_USER: {
      return {
        ...state,
        selectedUser: null
      }
    }

    default:
      return state
  }
}

export default usersReducer