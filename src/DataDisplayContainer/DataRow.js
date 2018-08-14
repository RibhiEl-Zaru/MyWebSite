import React from "react";

export default class DataRow extends React.Component {

  render() {
    return (<h4>
      <label className="instruction">
        {this.props.address}
        &nbsp; : &nbsp; {this.props.value}
      </label>
    </h4>)
  }
}
