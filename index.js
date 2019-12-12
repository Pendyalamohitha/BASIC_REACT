import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Header';
import User from './User';
import Hello from './Hello';

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'ReactJs'
    }; 
  }

  render() {
    return (
      <div>
      {this.state.name}
        <Header/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
