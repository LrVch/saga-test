import { createSelector } from 'reselect'

export const usersState = state => state.users

export const getusers = createSelector(
  usersState,
  usersState => usersState.users
)