import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Calendar from './src/calendar/calendar.jsx'
import holidays from './src/calendar/reducers.js'
import App from './src/containers/App.js'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'

const store = createStore(
  holidays,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) 
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('calendar')
)