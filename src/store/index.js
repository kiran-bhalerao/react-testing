import { createStore, combineReducers } from "redux"
import commentReducer from "../reducers/commentReducer"

export default createStore(
  combineReducers({
    commentReducer
  })
)
