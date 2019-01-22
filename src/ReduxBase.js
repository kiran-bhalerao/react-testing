import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import commentReducer from './reducers/commentReducer'
import reduxPromise from 'redux-promise'

export default ({ children, initialState = {} }) => {
  const store = createStore(
    combineReducers({ commentReducer }),
    initialState,
    applyMiddleware(reduxPromise)
  )
  return <Provider store={store}>{children}</Provider>
}
