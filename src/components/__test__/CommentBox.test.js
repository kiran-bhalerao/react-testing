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

it("has a textarea and button::1", () => {
  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find("button").length).toEqual(1)
})

describe('the textarea',()=>{

  it("has textarea where user can type::2", () => {
    // fake change event
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new value"
      }
    })
    // re-render app
    wrapped.update()
    // find textarea with prop value
    expect(wrapped.find("textarea").prop("value")).toEqual("new value")
  })
  
  it("submit form and clear textarea::3", () => {
    // first enter vaue in textarea
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new value"
      }
    })
    // re-render app
    wrapped.update()
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
