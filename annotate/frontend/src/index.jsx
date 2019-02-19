import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configureStore';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#root')
);


serviceWorker.register();
