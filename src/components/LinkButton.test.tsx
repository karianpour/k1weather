import React from 'react';
import { render, screen } from '../test-utils';
import LinkButton from './LinkButton';

test('renders link botton', () => {
  render(
    <LinkButton to='/testLink'/>
  );
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/testLink');
});

test('link botton renders children', () => {
  render(
    <LinkButton to='testLink'>
      <div data-testid='testDiv'/>
    </LinkButton>
  );
  expect(screen.getByTestId(/testDiv/i)).toBeInTheDocument();
});
