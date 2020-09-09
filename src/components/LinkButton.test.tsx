import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { render, screen } from '../test-utils';
import LinkButton from './LinkButton';

test('renders link botton', () => {
  render(
    <Router>
      <LinkButton to='/testLink'/>
    </Router>
  );
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/testLink');
});

test('link botton renders children', () => {
  render(
    <Router>
      <LinkButton to='testLink'>
        <div data-testid='testDiv'/>
      </LinkButton>
    </Router>
  );
  expect(screen.getByTestId(/testDiv/i)).toBeInTheDocument();
});
