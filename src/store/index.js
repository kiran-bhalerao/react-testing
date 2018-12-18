import { createStore, combineReducers } from "redux"
import CommentReducer from "../reducers/CommentReducer"

export default createStore(
  combineReducers({
    CommentReducer
  })
)
