import React, {Component} from 'react';
import {Navbar, NavItem, Nav, MenuItem, NavDropdown} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(selectedKey) {
    console.log(selectedKey)
    this.props.changeSelected(selectedKey);
  }

  render() {
    return (<Navbar class="navbar navbar-inverse">

      <Nav className="navbar navbar-dark bg-dark" onSelect={this.handleSelect.bind(this)}>
        <Navbar.Header>
          {/* // Try to get it to align center --> */}
          <Navbar.Brand>
            <a href="#home">Logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        <NavItem eventKey={"About Me"}>
          About Me
        </NavItem>
        <NavItem eventKey={"Portfolio"}>
          Portfolio
        </NavItem>
        <NavDropdown eventKey={"Hobbies"} title="Hobbies" id="basic-nav-dropdown">
          <MenuItem eventKey={"Photography"}>Photography</MenuItem>
          <MenuItem eventKey={"Sports"}>Sports</MenuItem>
          <MenuItem eventKey={"Music"}>Music</MenuItem>
          <MenuItem eventKey={"Film"}>Film</MenuItem>
        </NavDropdown>
        <NavItem eventKey={"Contact Me"} href="#">
          Contact Me
        </NavItem>

      </Nav>
    </Navbar>)
  }
}

export default Header
