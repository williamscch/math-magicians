import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
  }}
  >
    <h1>Math Magicians</h1>
    <ul style={{
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      alignItems: 'center',
    }}
    >
      <li><Link className="link" to="/">Home</Link></li>
      <li><Link className="link" to="/calculator">Calculator</Link></li>
      <li><Link className="link" to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
