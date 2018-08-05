import React, {Component} from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import Form from './Form.js'
import ALDecoder from "./ALDecoder.js"
class DecoderDisplay extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          Assembly Language Decoder
        </PageHeader>
      </div>
      <p>
        Below is an application I built Fall of 2017 while working under Profesor Robert Muller at Boston College for Intro to Computer Science students to use in order to better understand the idea of Assembly Language. Feel free to play around with it. Instructions about the specific Assembly Language it compiles can be found on my github at the link&nbsp;
        <a href="https://github.com/RibhiEl-Zaru/Assembly-Language-React-VM">here</a>.
      </p>
      <br/>
      <br/>
      <div>
        <ALDecoder/>
      </div>
      <br/>
      <br/>

    </div>)
  }
}

export default DecoderDisplay
