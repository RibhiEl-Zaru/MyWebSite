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
        <NavItem eventKey={"Hobbies"} href="#">
          Hobbies
        </NavItem>
        <NavItem eventKey={"Contact Me"} href="#">
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
