// 1. Deep dive into a React component object. The button object is printed out on the line 22nd, look in the Chrome DevTools
//// 1.1 What are available properties and methods of the button object?
//// 1.2 Look at the prototype chain of the button object
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  log = () => {
    console.log(`My button name is ${this.props.name}`);
  };

  render() {
    return <button onClick={this.log}>{this.props.name}</button>;
  }
}
const button = new Button();

// The following line prints out the button object of the Component class
console.log(button);

export default Button;
