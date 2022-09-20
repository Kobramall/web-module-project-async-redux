import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reducer }  from './reducer/jokeReducer'

import App from './App';
import './index.css';

const store = createStore(reducer)

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
