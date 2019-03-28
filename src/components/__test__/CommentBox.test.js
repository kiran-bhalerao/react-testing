import { mount } from 'enzyme';
import React from 'react';
import ReduxBase from '../../ReduxBase';
import CommentBox from '../CommentBox';

let wrapped = null

beforeEach(() => {
  wrapped = mount(
    <ReduxBase>
      <CommentBox />
    </ReduxBase>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('1 Has a textarea and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('The textarea', () => {
  beforeEach(() => {
    // first enter value in textarea
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new value'
      }
    })
    // re-render app
    wrapped.update()
  })

  it('2 Has textarea where user can type', () => {
    // find textarea with prop value
    expect(wrapped.find('textarea').prop('value')).toEqual('new value')
  })

  it('3 Should submit the form and clear the textarea', () => {
    // teaxtarea really has text
    expect(wrapped.find('textarea').prop('value')).toEqual('new value')

    // submit the form (fake submision)
    wrapped.find('form').simulate('submit')
    // re-render the app
    wrapped.update()
    // check textarea is cleared
    expect(wrapped.find('textarea').prop('value')).toEqual('e')
  })
})
