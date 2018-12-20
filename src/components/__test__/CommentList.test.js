import React from "react"
import { mount } from "enzyme"
import CommentList from "../CommentList"
import ReduxBase from "../../ReduxBase"

let wrapped = null

beforeEach(() => {
  const initialState = {
    commentReducer: ["C1", "C2"]
  }
  wrapped = mount(
    <ReduxBase initialState={initialState}>
      <CommentList />
    </ReduxBase>
  )
})

it("creates One LI for each Comment", () => {
  console.log(wrapped.find("li").length)
})
