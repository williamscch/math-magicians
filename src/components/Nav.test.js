import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('Navbar', () => {
  test('Renders Nav component', () => {
    const tree = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
