import { createSelector } from 'reselect'

export const uiState = state => state.ui

export const getIsOnLine = createSelector(
  uiState,
  uiState => uiState.isOnline
)