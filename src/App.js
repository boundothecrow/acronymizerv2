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
        // Bind everything right from the get-go so it can be used
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

    componentDidMount() {
        // Grab the input field's ID
        let input = document.getElementById('input');
        
        // Add an eventListener so that users can't press the enter key anywhere.
        // Oh, and also read for the Enter key
        input.addEventListener('keyup', (e) => {
            // Just in case
            e.preventDefault();
            if (e.keyCode === 13) {
                // Get the button so we can trick it to click
                document.getElementById('button').click();
            }
        });
    }

    // Time to render the goods
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Acronymizer!</h1>
                </header>
                <p>Type in a random word, and watch it spew out a random acronym!</p>
                <input value={this.state.input} onChange={this.updateInput} type="text" className="font" size="25" id="input" placeholder="type in a word" />
                <button onClick={this.generateOutput} className="font" id="button">Generate</button>
                <div id="output">
                    <p>{this.state.output}</p>
                </div>
                <footer>
                    <p>
                        Created with <a href="https://reactjs.org/">ReactJS</a> -
            View on <a href="https://github.com/zeechapman/AcronymizerV2">GitHub</a>
                        <i className="fa fa-github fa-2x" style={{ verticalAlign: "middle" }} aria-hidden="true"></i>
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
