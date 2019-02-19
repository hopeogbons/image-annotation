import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import ImageList from '../pages/ImageList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ ImageList } />
        </Switch>
      </div>
    )
  }
}