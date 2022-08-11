import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator';
import '@testing-library/jest-dom';

describe('Calculator page testing', () => {
  it('Renders Calculator itself', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  it('Title is on Page', () => {
    render(<Calculator />);
    expect(screen.getByText(/Let`s do some Math!/)).toBeInTheDocument();
  });

  it('Writing 123 in the calculator', () => {
    render(<Calculator />);
    const showNumbers = document.querySelector('.showNumbers');
    const number1 = screen.getByText('1');
    const number2 = screen.getByText('2');
    const number3 = screen.getByText('3');

    fireEvent.click(number1);
    fireEvent.click(number2);
    fireEvent.click(number3);

    expect(showNumbers.innerHTML).toBe('123');
  });

  it('Making an operation', () => {
    render(<Calculator />);

    const showNumbers = document.querySelector('.showNumbers');
    const plusOperator = screen.getByText('+');
    const number2 = screen.getByText('2');
    const number0 = screen.getByText('1');
    const number5 = screen.getByText('5');
    const equalOperator = screen.getByText('=');

    fireEvent.click(number2);
    fireEvent.click(number0);
    fireEvent.click(plusOperator);
    fireEvent.click(number5);
    fireEvent.click(equalOperator);

    expect(showNumbers.innerHTML).toBe('26');
  });
});
