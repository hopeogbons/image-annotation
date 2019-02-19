import { Component } from 'react';
import React from "react";

export default class Header extends Component {
	render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">Image Annotation</a>
            </div>
          </nav>
        </div>
      );
	}
}