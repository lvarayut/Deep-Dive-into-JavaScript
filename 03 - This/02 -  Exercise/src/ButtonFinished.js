import React, { Component } from 'react';

// Method I: Use the bind function
class Button extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
  }

  log() {
    console.log(`My button name is ${this.props.name}`);
  }

  render() {
    return (
    <button onClick={this.log}>{this.props.name}</button>
    );
  }
}
export default Button;

// Method II: Use an arrow function
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
export default Button;