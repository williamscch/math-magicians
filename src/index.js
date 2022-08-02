import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalculatorDisplay from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorDisplay />
  </React.StrictMode>,
);
