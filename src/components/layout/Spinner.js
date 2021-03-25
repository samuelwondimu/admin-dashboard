import React, { Component } from "react";
import Rolling from "../../images/Rolling.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={Rolling} />
      </div>
    );
  }
}
