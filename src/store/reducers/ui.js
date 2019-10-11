import * as actionsTypes from '../actions';

const initialState = {
  isOnline: true,
  threeUserNorificationisShown: false
}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.UI_SET_IS_ONLINE: {
      const { isOnline } = payload
      return {
        ...state,
        isOnline
      }
    }

    case actionsTypes.UI_SET_NOTIFICATION_STATE: {
      const { state: threeUserNorificationisShown} = payload
      return {
        ...state,
        threeUserNorificationisShown
      }
    }



    default:
      return state
  }
}

export default uiReducer