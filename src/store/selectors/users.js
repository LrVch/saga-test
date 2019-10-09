import { createSelector } from 'reselect'

export const usersState = state => state.users

export const getUsers = createSelector(
  usersState,
  usersState => usersState.users
)

export const getSelectedUser= createSelector(
  usersState,
  usersState => usersState.selectedUser
)

export const getIsUsersLoading= createSelector(
  usersState,
  usersState => usersState.isUsersLoading
)

export const getPosts= createSelector(
  usersState,
  usersState => usersState.posts
)

export const getAlbums= createSelector(
  usersState,
  usersState => usersState.albums
)


