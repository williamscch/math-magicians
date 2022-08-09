import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorDisplay = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  function handleClick(e) {
    const answer = calculate(state, e.target.textContent);
    setState(answer);
  }

  const { total, next } = state;
  return (
    <div className="calculatorContainer">
      <h1>Let`s do some Math!</h1>
      <div className="calculator">
        <h2 className="showNumbers">{next || total}</h2>
        <div className="line line1">
          <button type="button" className="operator" onClick={handleClick}>AC</button>
          <button type="button" className="operator" onClick={handleClick}>+/-</button>
          <button type="button" className="operator" onClick={handleClick}>%</button>
          <button type="button" className="operator" onClick={handleClick}>÷</button>
        </div>
        <div className="line line2">
          <button type="button" onClick={handleClick}>7</button>
          <button type="button" onClick={handleClick}>8</button>
          <button type="button" onClick={handleClick}>9</button>
          <button type="button" onClick={handleClick} className="operator">x</button>
        </div>
        <div className="line line3">
          <button type="button" onClick={handleClick}>4</button>
          <button type="button" onClick={handleClick}>5</button>
          <button type="button" onClick={handleClick}>6</button>
          <button type="button" onClick={handleClick} className="operator">-</button>
        </div>
        <div className="line line4">
          <button type="button" onClick={handleClick}>1</button>
          <button type="button" onClick={handleClick}>2</button>
          <button type="button" onClick={handleClick}>3</button>
          <button type="button" onClick={handleClick} className="operator">+</button>
        </div>
        <div className="line line5">
          <button type="button" onClick={handleClick}>0</button>
          <button type="button" onClick={handleClick}>.</button>
          <button type="button" onClick={handleClick} className="operator">=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
