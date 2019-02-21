import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
import logger from '../middlewares/logger'

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [thunk, promise, routerMiddleware(history), logger];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

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