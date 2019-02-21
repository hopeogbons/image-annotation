import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import ImageList from '../pages/ImageList';
import ImageView from '../pages/ImageView';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ ImageList } />
          <Route path="/images/annotate/:id" component={ ImageView } />
        </Switch>
      </div>
    )
  }
}