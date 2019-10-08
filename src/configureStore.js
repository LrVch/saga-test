import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducers'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  return {
    store: createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    ),
    sagaMiddleware
  }
}