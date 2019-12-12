import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './Header';
import User from './User';
import Hello from './Hello';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render() {
    return (
      <div>
       <h2 className="text-center">Header</h2>
      <BrowserRouter>
        <Link to="/hello">Hello</Link>
        <Link to="/user">User</Link>

        <Route path="/" exact component={Hello}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/user" component={User}/>
      </BrowserRouter>

      <button className="btn btn-primary"> hi </button>
      </div>
    );
  }
}

export default Header;

  
