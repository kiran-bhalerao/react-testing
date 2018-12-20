import commentReducer from "../commentReducer"
import { ADD_COMMENT } from "../../actions/types"

it("handle action of type ADD_COMMENT", () => {
  const fakeAction = {
    type: ADD_COMMENT,
    payload: "my comment"
  }

  const state = commentReducer([],fakeAction)
  expect(state).toEqual(["my comment"])
})
