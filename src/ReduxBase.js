import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import commentReducer from "./reducers/commentReducer"

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(combineReducers({ commentReducer }), initialState)}
    >
      {children}
    </Provider>
  )
}
