import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import Header from "./Header.js"
import {
  Navbar,
  NavItem,
  Nav,
  Grid,
  Row,
  Col
} from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    }
  }
  render() {
    const activePlace = this.state.activePlace;
    return (<div>
      < Header/>
    </div>);
  }
}

export default App;
