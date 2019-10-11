export const UI_SET_IS_ONLINE = 'UI_SET_IS_ONLINE'
export const UI_SET_NOTIFICATION_STATE = 'UI_SET_NOTIFICATION_STATE'

export const uiSetIsOnline = (isOnline) => ({
  type: UI_SET_IS_ONLINE,
  payload: { isOnline }
})

export const uiSetNotificationState = (state) => ({
  type: UI_SET_NOTIFICATION_STATE,
  payload: { state }
})


