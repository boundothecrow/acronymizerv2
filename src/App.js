import React, { Component } from 'react';
import Acronymize from './Acronymize.js';

import './App.css';
import "font-awesome/css/font-awesome.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.generateOutput = this.generateOutput.bind(this);
  }

  // Grab the value from the textbox
  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  // When the user presses the button, it generates an output
  generateOutput(e) {
    var acro = new Acronymize();
    this.setState({ output: acro.generate(this.state.input) });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Acronymizer!</h1>
        </header>
          <p>Type in a random word, and watch it spew out a random acronym!</p>
          <input value={this.state.input} onChange={this.updateInput} type="text" size="25" id="input" placeholder="type in a word" />
          <button onClick={this.generateOutput}>Generate</button>
          <div id="output">
            <p>{this.state.output}</p>
          </div>
          <footer>
            <p>
            Created with <a href="https://reactjs.org/">ReactJS</a> -
            View on <a href="https://github.com/zeechapman/Acronymizer">GitHub</a>
            <i className="fa fa-github fa-2x" style={{verticalAlign: "middle"}} aria-hidden="true"></i>
            </p>
          </footer>
      </div>
    );
  }
}

export default App;
