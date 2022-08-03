import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const answer = calculate(this.state, e.target.textContent);
    this.setState(answer);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculatorContainer">
        <div className="calculator">
          <h2 className="showNumbers">{next || total}</h2>
          <div className="line line1">
            <button type="button" className="operator" onClick={this.handleClick}>AC</button>
            <button type="button" className="operator" onClick={this.handleClick}>+/-</button>
            <button type="button" className="operator" onClick={this.handleClick}>%</button>
            <button type="button" className="operator" onClick={this.handleClick}>÷</button>
          </div>
          <div className="line line2">
            <button type="button" onClick={this.handleClick}>7</button>
            <button type="button" onClick={this.handleClick}>8</button>
            <button type="button" onClick={this.handleClick}>9</button>
            <button type="button" onClick={this.handleClick} className="operator">x</button>
          </div>
          <div className="line line3">
            <button type="button" onClick={this.handleClick}>4</button>
            <button type="button" onClick={this.handleClick}>5</button>
            <button type="button" onClick={this.handleClick}>6</button>
            <button type="button" onClick={this.handleClick} className="operator">-</button>
          </div>
          <div className="line line4">
            <button type="button" onClick={this.handleClick}>1</button>
            <button type="button" onClick={this.handleClick}>2</button>
            <button type="button" onClick={this.handleClick}>3</button>
            <button type="button" onClick={this.handleClick} className="operator">+</button>
          </div>
          <div className="line line5">
            <button type="button" onClick={this.handleClick}>0</button>
            <button type="button" onClick={this.handleClick}>.</button>
            <button type="button" onClick={this.handleClick} className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
