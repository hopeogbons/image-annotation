import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import image from './image';
import annotation from './annotation';

export default (history) => combineReducers({
  router: connectRouter(history),
  image,
  annotation
})
