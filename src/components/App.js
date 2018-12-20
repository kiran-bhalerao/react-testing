import React, { Component } from "react"
import CommentBox from "./CommentBox"
import CommentList from "./CommentList"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CommentBox />
        <CommentList />
      </React.Fragment>
    )
  }
}
export default App
