import { render, screen } from '@testing-library/react';
import Quote from './Quote';
import '@testing-library/jest-dom';

describe('Tests for quotes page', () => {
  test('renders correctly snapshot', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
  test('Author`s name is on the page', () => {
    render(<Quote />);
    expect(screen.getByText(/-William Paul Thurston/)).toBeInTheDocument();
  });
  test('Mathematics is on the page', () => {
    render(<Quote />);
    expect(screen.queryByText(/Mathematics/)).toBeInTheDocument();
  });
});
