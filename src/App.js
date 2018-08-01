import React, {Component} from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import Header from "./Header.js"
import AboutMe from "./AboutMe.js"
import Portfolio from "./Portfolio.js"

const CORE = {
  "About Me": <AboutMe/>,

  "Portfolio": <Portfolio/>,
  3: <div>dfasdfd</div>
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
    const activeSite = this.state.activeSite;
    console.log(activeSite)
    console.log("King Kunta")
    const div = CORE[activeSite]
    console.log(div)
    return (<div className="App">
      <div >< Header changeSelected={this.changeSelected.bind(this)}/></div>
      <div className="Body">
        {div}
      </div>
    </div>);

  }

  changeSelected(key) {
    console.log(key);
    this.state.activeSite = key
    console.log(this.state)
    //this.setState({activeSite: key})
  }

}

export default App;
