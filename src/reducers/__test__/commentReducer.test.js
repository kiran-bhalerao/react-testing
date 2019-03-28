import { ADD_COMMENT } from '../../actions/types'
import commentReducer from '../commentReducer'

it('handle action of type ADD_COMMENT ', () => {
  const fakeAction = {
    type: ADD_COMMENT,
    payload: 'my comment'
  }

  const state = commentReducer([], fakeAction)
  expect(state).toEqual(['my comment'])
})
