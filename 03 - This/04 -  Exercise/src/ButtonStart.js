// 1. What would happen after clicking the button?
// 2. Fix the code snippet to print out "My button name is Click me" after clicking the button
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  log() {
    console.log(`My button name is ${this.props.name}`);
  }

  render() {
    return <button onClick={this.log}>{this.props.name}</button>;
  }
}
export default Button;
