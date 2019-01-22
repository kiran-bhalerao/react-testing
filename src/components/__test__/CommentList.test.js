import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import ReduxBase from '../../ReduxBase'

let wrapped = null

beforeEach(() => {
  const initialState = {
    commentReducer: ['C1', 'C2']
  }
  wrapped = mount(
    <ReduxBase initialState={initialState}>
      <CommentList />
    </ReduxBase>
  )
})

it('creates One LI for each Comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows text for LI', () => {
  expect(wrapped.render().text()).toContain('C1')
})
