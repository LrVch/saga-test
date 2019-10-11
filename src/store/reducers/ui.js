import * as actionsTypes from '../actions';

const initialState = {
  isOnline: true
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

    default:
      return state
  }
}

export default uiReducer