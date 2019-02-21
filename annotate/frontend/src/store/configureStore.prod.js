import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [thunk, promise, routerMiddleware(history)];

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ...middleware,
        ...enhancers,
      ),
    ),
  );
}