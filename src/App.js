import React, {Component} from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import Header from "./Header.js"
import AboutMe from "./AboutMe.js"
import Portfolio from "./Portfolio.js"
import Photography from "./Photography.js"
import ContactMe from "./ContactMe.js"

const CORE = {
  "About Me": <AboutMe/>,

  "Portfolio": <Portfolio/>,
  "Photography": <Photography/>,
  "Contact Me": <ContactMe/>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSite: "About Me"
    }
  }

  componentWillMount() {
    console.log("DSDF");
  }
  render() {
    const body = CORE[this.state.activeSite]
    return (<div className="App">
      <div >< Header changeSelected={this.changeSelected.bind(this)}/></div>
      <div className="Body">
        {body}
      </div>
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
