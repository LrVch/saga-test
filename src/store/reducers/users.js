import * as actionsTypes from '../actions';

const initialState = {
  albums: [],
  isContentLoading: false,
  isUsersLoading: true,
  posts: [],
  selectedUser: null,
  users: [],
  showing: null,
  viewedUsers: [],
  usersEdge: 3
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
      const { id } = payload

      return {
        ...state,
        selectedUser: id,
      }
    }

    case actionsTypes.USERS_CLEAR_SELECTED_USER: {
      return {
        ...state,
        selectedUser: null
      }
    }

    case actionsTypes.USERS_GET_USER_ALBUMS_REQUEST:
    case actionsTypes.USERS_GET_USER_POSTS_REQUEST: {
      return {
        ...state,
        isContentLoading: true
      }
    }

    case actionsTypes.USERS_GET_USER_POSTS_FAIL:
    case actionsTypes.USERS_GET_USER_ALBUMS_FAIL: {
      return {
        ...state,
        isContentLoading: false
      }
    }

    case actionsTypes.USERS_GET_USER_POSTS_SUCCESS: {
      const { viewedUsers, selectedUser } = state
      return {
        ...state,
        isContentLoading: false,
        posts: payload.posts,
        viewedUsers: (selectedUser && viewedUsers.indexOf(selectedUser) === -1)
          ? [...viewedUsers, selectedUser]
          : viewedUsers
      }
    }

    case actionsTypes.USERS_GET_USER_ALBUMS_SUCCESS: {
      const { viewedUsers, selectedUser } = state
      return {
        ...state,
        isContentLoading: false,
        albums: payload.albums,
        viewedUsers: (selectedUser && viewedUsers.indexOf(selectedUser) === -1)
          ? [...viewedUsers, selectedUser]
          : viewedUsers
      }
    }

    case actionsTypes.USERS_CLEAR_CONTENT: {
      return {
        ...state,
        albums: [],
        posts: []
      }
    }

    case actionsTypes.USERS_SET_SHOWING: {
      return {
        ...state,
        showing: payload.type
      }
    }



    default:
      return state
  }
}

export default usersReducer