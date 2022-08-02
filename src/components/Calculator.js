import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div className="calculatorContainer">
        <div className="calculator">
          <h2 className="showNumbers">0</h2>
          <div className="line line1">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="operator">/</button>
          </div>
          <div className="line line2">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="operator">x</button>
          </div>
          <div className="line line3">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="operator">-</button>
          </div>
          <div className="line line4">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="operator">+</button>
          </div>
          <div className="line line5">
            <button type="button">0</button>
            <button type="button">.</button>
            <button type="button" className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
