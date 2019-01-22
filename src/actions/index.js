import { ADD_COMMENT, FETCH_COMMENT } from './types'
import axios from 'axios'

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

export const fetchComment = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENT,
    payload: response
  }
}
