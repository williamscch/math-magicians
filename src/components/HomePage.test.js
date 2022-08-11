import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';
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

describe('calculator testing using snapshots', () => {
  it('Test calc', () => {
    const tree = renderer.create(<Calculator/>);
    expect(tree).toMatchSnapshot();
  });
});

describe('calculator testing using snapshots', () => {
  it('Test 3 add 3', () => {
    render(<Calculator/>);
    fireEvent.click(screen.getByTestId('3'));
    fireEvent.click(screen.getByTestId('+'));
    fireEvent.click(screen.getByTestId('3'));
    fireEvent.click(screen.getByTestId('='));
    expect(screen.getByTestId('resultText')).toBe('6');
  })
});


