import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ImageViewContainer from '../containers/ImageViewContainer';
import FooterContainer from '../containers/FooterContainer';

export default class ImageView extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ImageViewContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
