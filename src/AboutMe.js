import React, {Component} from 'react';
import './App.css';
import goonery from "../public/Goonery.jpg"

class AboutMe extends Component {

  render() {
    return (<div >
      <div className="Center">
        <h1>
          Hello. I'm Ribhi El-Zaru
        </h1>
      </div>
      <br/>
      <div >
        I'm a developer from the great city of Boston, MA. Proudly, this is the beginning of my website! I've always been a fan of the ReactJS platform, and decided to flex and use it to code my own Portfolio from scratch. Speaking of flex, I'm actually realllly strugling with spacing and hope it'll help eventually! But until then, here's my favorite picture of myself, as created by a true homie, Brandon Navon.

      </div>
      <br/>
      <div className="Center">
        <img src={goonery} width={240} height={240} alt="logo"/>
      </div>
    </div>)
  }
}

export default AboutMe
