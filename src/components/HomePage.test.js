import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<HomePage />);
    // screen.debug();
  });

  it('title renders', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to our Page!')).toBeInTheDocument();
  });

  it('check role', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
