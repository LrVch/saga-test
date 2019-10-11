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

export const getIsContentLoading= createSelector(
  usersState,
  usersState => usersState.isContentLoading
)

export const getShowing= createSelector(
  usersState,
  usersState => usersState.showing
)

export const getViewedUsers= createSelector(
  usersState,
  usersState => usersState.viewedUsers
)

export const getUsersEdge= createSelector(
  usersState,
  usersState => usersState.usersEdge
)

export const getUsersByIds = createSelector(
  [getUsers, getViewedUsers],
  (users, ids) => users.filter(user => ids.includes(user.id))
)


