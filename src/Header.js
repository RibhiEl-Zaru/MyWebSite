import React, {Component} from 'react';
import {Navbar, NavItem, Nav, MenuItem, NavDropdown} from "react-bootstrap";
import './App.css';
class Header extends Component {

  handleSelect(selectedKey) {
    console.log(selectedKey)
    this.props.changeSelected(selectedKey);
  }

  render() {
    return (<Navbar>
      <Nav className="navbar navbar-dark bg-dark" onSelect={this.handleSelect.bind(this)}>
        {/*
        <Navbar.Header>
          {/* // Try to get it to align center -->
          <Navbar.Brand>
            <a>Logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        */
        }
        <NavItem eventKey={"About Me"}>
          About Me
        </NavItem>
        <NavDropdown eventKey={"Projects"} title="Projects" id="basic-nav-dropdown">
          <MenuItem eventKey={"MentalRep"}>MentalRep</MenuItem>
          <MenuItem eventKey={"AssemblyLanguage"}>Assembly Language Decoder</MenuItem>
          <MenuItem eventKey={"Genre"}>Genre Prediction</MenuItem>
          <MenuItem eventKey={"Cryptography"}>Cryptography</MenuItem>
        </NavDropdown>
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