// 1. Go through a React object
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  log = () => {
    console.log(`My button name is ${this.props.name}`);
  };

  render() {
    return (
    <button onClick={this.log}>{this.props.name}</button>
    );
  }
}
const button = new Button();
console.log(button);
export default Button;
