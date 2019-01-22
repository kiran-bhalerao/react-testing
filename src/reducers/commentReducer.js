import { ADD_COMMENT, FETCH_COMMENT } from '../actions/types'

const INITAIL_STATE = []
export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload]
    case FETCH_COMMENT:
      let comment = action.payload.data.map(comment => comment.name)
      return [...state, ...comment]
    default:
      return state
  }
}
