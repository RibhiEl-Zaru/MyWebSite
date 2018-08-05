import React, {Component} from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap';
class Cryptography extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          Cryptography
        </PageHeader>

      </div>
      <p>
        My Junior year at Boston College I took a Cryptography class taught by the esteemed Howard Straubing. My final project for said class was dedicated to decrypting the Two-Time-Pad. This project was made to show the ability to exploit the redundant use of a key in a one-time-pad, even if that key was only used once. This exploitation was performed by utilizing n-gram corpuses, knowledge about the language and linguistic tendencies the encrytped texts were written with and basic truths about the XOR operation to build and act upon a statistical profile of the ciphertexts. Ultimately, the decryption strategy was extremely successful, returning about 95.38% of the originally decrypted text when given ideal circumstances. For more details, please visit the link&nbsp;
        <a href="https://drive.google.com/file/d/1_AKUyW2Ht2VPIZn4sMAtxChoC7jjSVQo/view">
          here</a>.
      </p>
    </div>)
  }
}

export default Cryptography
