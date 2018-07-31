import React, {Component} from 'react';
import {
  Navbar,
  NavItem,
  Nav,
  Grid,
  Row,
  Col,
  MenuItem,
  NavDropdown
} from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (<Navbar class="navbar navbar-inverse">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Sweet Logo</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav className="navbar-right">
        <NavItem eventKey={1} href="#">
          About Me
        </NavItem>
        <NavItem eventKey={2} href="#">
          Portfolio
        </NavItem>
        <NavItem eventKey={3} href="#">
          Hobbies
        </NavItem>
        <NavItem eventKey={4} href="#">
          Contact Me
        </NavItem>
        <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider="divider"/>
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>)
  }
}

export default Header
