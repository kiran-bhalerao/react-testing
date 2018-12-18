import React, { Component } from "react"
import CommentBox from "./CommentBox"
import CommentList from "./CommentList"
import { Provider } from "react-redux"
import store from "../store/index"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CommentBox />
        <CommentList />
      </Provider>
    )
  }
}
export default App
