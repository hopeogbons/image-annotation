import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ImageListContainer from '../containers/ImageListContainer';
import FooterContainer from '../containers/FooterContainer';

export default class ImageList extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ImageListContainer />
        <FooterContainer />
      </div>
    );
  }
}
