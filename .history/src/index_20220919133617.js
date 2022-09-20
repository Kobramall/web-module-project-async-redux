import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reducer }  from './reducer/jokeReducer'

import App from './App';
import './index.css';

const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
       <App />
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
