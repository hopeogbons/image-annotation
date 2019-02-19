import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ImageListContainer from '../containers/ImageListContainer';
import FooterContainer from '../containers/FooterContainer';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_in"/>
        <ImageListContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
