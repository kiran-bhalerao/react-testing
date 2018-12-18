import React from "react"
import CommentBox from "../CommentBox"
import { mount } from "enzyme"

let wrapped = null

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it("1::has a textarea and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find("button").length).toEqual(1)
})

describe("the textarea", () => {
  beforeEach(() => {
    // first enter value in textarea
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new value"
      }
    })
    // re-render app
    wrapped.update()
  })

  it("2::has textarea where user can type", () => {
    // find textarea with prop value
    expect(wrapped.find("textarea").prop("value")).toEqual("new value")
  })

  it("3::form submit, clear textarea", () => {
    // teaxtarea really has text
    expect(wrapped.find("textarea").prop("value")).toEqual("new value")

    // submit the form (fake submision)
    wrapped.find("form").simulate("submit")
    // re-render the app
    wrapped.update()
    // check textarea is cleared
    expect(wrapped.find("textarea").prop("value")).toEqual("")
  })
})
