import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
  }

  handleButtonClick = (value) => {
    if (this.state.display === '0') {
      this.setState({ display: value });
    } else {
      this.setState({ display: this.state.display + value });
    }
  }

  handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      this.setState({ display: eval(this.state.display) });
    } catch (error) {
      this.setState({ display: 'Error' });
    }
  }

  handleClear = () => {
    this.setState({ display: '0' });
  }

  render() {
    return (
      <div className="calculator">
        <input type="text" value={this.state.display} readOnly />
        <div className="buttons">
          <button onClick={() => this.handleClear()}>C</button>
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={() => this.handleCalculate()}>=</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
