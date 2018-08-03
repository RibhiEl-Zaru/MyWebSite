import React, {Component} from 'react';
import './App.css';
import goonery from "../public/Goonery.jpg"
import {PageHeader} from 'react-bootstrap';

class AboutMe extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          Hey! My name is Ribhi El-Zaru.
        </PageHeader>
      </div>
      <br/>
      <div >
        First of all, thaks for checking out my website! I'm a developer from the great city of Boston, MA. Proudly, this is the beginning of my website! I've always been a fan of the ReactJS platform, and decided to flex and use it to code my own Portfolio from scratch. Speaking of flex, I'm actually realllly strugling with spacing and hope that tool will help eventually! But until then, here is my favorite picture of myself, as created by a true homie, Brandon Navon.

      </div>
      <br/>
      <div className="Center">
        <img src={goonery} width={240} height={240} alt="logo"/>
      </div>
    </div>)
  }
}

export default AboutMe
