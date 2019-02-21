import { Component } from 'react';
import React from "react";

export default class Header extends Component {
	render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container" style={{width: '1000px'}}>
                <a className="navbar-brand" href="/"><h2>Image Annotation</h2></a>
            </div>
          </nav>
        </div>
      );
	}
}