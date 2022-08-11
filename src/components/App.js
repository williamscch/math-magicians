import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorDisplay from './Calculator';
import HomePage from './HomePage';
import Nav from './Nav';
import Quote from './Quote';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorDisplay />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}
export default App;
