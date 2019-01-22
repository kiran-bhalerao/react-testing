import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }
  onCommentChange = event => {
    this.setState({
      comment: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.addComment(this.state.comment)

    this.setState({ comment: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Comment</h1>
          <textarea
            value={this.state.comment}
            id='textarea'
            onChange={this.onCommentChange}
          />
          <div>
            <button type='submit'>POST</button>
          </div>
        </form>
        <button className='fetch-comment' onClick={this.props.fetchComment}>
          Fetch comment
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  actions
)(CommentBox)

// export default CommentBox
