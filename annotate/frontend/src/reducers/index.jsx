import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import image from './image';

export default (history) => combineReducers({
  router: connectRouter(history),
  image
})
