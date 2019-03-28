import { shallow } from 'enzyme'
import React from 'react'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

let wrapped = null

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a  comment box', () => {
  expect(wrapped.find(CommentBox).length).toBeGreaterThan(0)
})

it('shows CommentList', () => {
  expect(wrapped.find(CommentList).length).toBeGreaterThan(0)
})
