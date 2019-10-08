import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore'
import rootSaga from './store/sagas'

const { store, sagaMiddleware } = configureStore()

sagaMiddleware.run(rootSaga)

const AppBundle = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  AppBundle
  , document.getElementById('root'));
