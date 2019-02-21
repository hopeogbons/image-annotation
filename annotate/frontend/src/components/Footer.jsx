import { Component } from 'react';
import React from "react";

export default class Footer extends Component {
	render() {
    return (
      <footer className="bottom bg-white">
        <hr/>
        <div className="container" style={{width: '1000px'}}><p>&copy; Hope Ogbons</p></div>
      </footer>
    );
	}
}