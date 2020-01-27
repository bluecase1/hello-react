import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validatied: false
    }

    handleCange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validatied: this.state.password === '0000'
        });
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleCange}
                    className={this.state.clicked ? (this.state.validatied ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        )
    }
}

export default ValidationSample;