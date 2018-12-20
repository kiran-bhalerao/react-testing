import { addComment } from "../index"
import { ADD_COMMENT } from "../types"

describe("Action Test", () => {
  it("has correct action type", () => {
    const action = addComment()
    expect(action.type).toBe(ADD_COMMENT)
  })

  it("has correct action payload", () => {
    const action = addComment("Test Payload")
    expect(action.payload).toBe("Test Payload")
  })
})
