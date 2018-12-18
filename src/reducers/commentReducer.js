import { ADD_COMMENT } from "../actions/types"

const INITAIL_STATE = []
export default (store = INITAIL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...store, action.payload]
    default:
      return store
  }
}
