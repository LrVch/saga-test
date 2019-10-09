// import * as actionsTypes from '../actions';

const initialState = {

}

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    // case actionsTypes.UI_CHANGE_THEME: {
    //   const { theme } = payload
    //   return {
    //     ...state,
    //     theme
    //   }
    // }

    default:
      return state
  }
}

export default uiReducer