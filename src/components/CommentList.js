import React, { Component } from "react"
import { connect } from "react-redux"
class CommentList extends Component {
  renderComment = () => {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>)
  }
  render() {
    return <ul>{this.renderComment()}</ul>
  }
}
const mapStatToProps = state => {
  return {
    comments: state.commentReducer
  }
}
export default connect(mapStatToProps)(CommentList)
