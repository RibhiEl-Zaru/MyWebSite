import React, {Component} from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import Header from "./Header.js"
import AboutMe from "./AboutMe.js"
import Portfolio from "./Portfolio.js"
import Photography from "./Photography.js"
import ContactMe from "./ContactMe.js"
import MentalRep from "./MentalRep.js"
import Sports from "./Sports.js"
import GenrePrediction from "./GenrePrediction.js"
import DecoderDisplay from "./DecoderDisplay.js"
import Cryptography from "./Cryptography.js"

const CORE = {
  "About Me": <AboutMe/>,
  "Portfolio": <Portfolio/>,
  "Photography": <Photography/>,
  "Contact Me": <ContactMe/>,
  "MentalRep": <MentalRep/>,
  "Sports": <Sports/>,
  "Genre": <GenrePrediction/>,
  "AssemblyLanguage": <DecoderDisplay/>,
  "Cryptography": <Cryptography/>

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSite: "About Me"
    }
  }

  componentWillMount() {}
  render() {
    const body = CORE[this.state.activeSite]
    return (<div className="App">
      <div >< Header changeSelected={this.changeSelected.bind(this)}/></div>
      <div className="textChunk">
        {body}
      </div>
      <br/>
      <br/>
    </div>);

  }

  changeSelected(key) {
    console.log(key);
    this.state.activeSite = key
    console.log(this.state)
    this.setState({activeSite: this.state.activeSite})
  }

}

export default App;
