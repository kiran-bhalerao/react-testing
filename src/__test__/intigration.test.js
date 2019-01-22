import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import ReduxBase from '../ReduxBase'
import App from '../components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetch c1' }, { name: 'fetch c2' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('fetch comments from API and shows LI for each', done => {
  const wrapped = mount(
    <ReduxBase>
      <App />
    </ReduxBase>
  )

  wrapped.find('.fetch-comment').simulate('click')

  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    done()
    wrapped.unmount()
  })
})
