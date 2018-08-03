import React, {Component} from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import MentalRepLogo from "../public/MentalRep.png"
class MentalRep extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          <img src={MentalRepLogo} height={240} alt="logo"/>
        </PageHeader>
      </div>
      <div >
        <p>
          Once upon a time, I was a wee little Sophomore at Boston College searching for a calling. Luckily for me, that calling found me in the form of Harris Williams&#39;s idea of putting Football practice and playbook preparation on the phone. This idea became MentalRep, and after just 1 semester of C.S. classes, I happily took on the developer role offered to me. As the first employee and member of a development team of two, I was faced with technological challenge after technological challenge. Somehow, without any considerable experience, we found solution after solution (some of which started out as hacks of course), and as of the summer of 2018, we have 20 paying Football teams using the software!
        </p>
        <p>
          The amount that I have learned from this experience, both as a software developer, entrepreneur and, most importantly, as a person was invaluable. If you wanna learn more about the company, or you&#39;re a Football coach looking for ways to help your team win more games, please visit our website at&nbsp;
          <a href="MentalRep.com">
            MentalRep.com
          </a>.
        </p>
        <p>
          Below you will find some details about my roles as a developer on the MentalRep project.
        </p>
        <br/>
        <div className="List">
          <ul className="discList">
            <li>One of a development team of 2 who built out MentalRep using Java, Javscript and Objective-C.</li>
            <br/>
            <li>Integrated MentalRep to be iOS, Android, Mac and Windows compatible through Intel&#39;s MOE and LibGDX.</li>
            <br/>
            <li>Applied and was accepted into Mass Challenge 2017 as a competitor</li>
            <br/>
            <li>Implemented an AWS-RDS MySQL server used throughout MentalRep for data-collection and analysis.</li>
            <br/>
            <li>Created scripts to generate PDF breakdowns of player usage for coaches and email them these pdfs and an HTML body that displayed the data as well.</li>
            <br/>
            <li>Worked on various UX and UI improvements to benefit our customers.</li>
            <br/>
            <li>Incorporated an Amazon SNS system to send notifications to players and coaches alike providing updates on MentalRep usage as well as when there are plays the coaches have specified them to practice.</li>
          </ul>
        </div>
      </div>
    </div>)
  }
}

export default MentalRep
