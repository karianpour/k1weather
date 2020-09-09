import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import IconButton from './IconButton';

test('renders icon botton', () => {
  render(
    <IconButton/>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test('icon botton has class', () => {
  render(
    <IconButton className={'testClass'}/>
  );
  const button = screen.getByRole("button");
  expect(button).toHaveClass('testClass');
});

test('icon botton renders children', () => {
  render(
    <IconButton>
      <div data-testid='testDiv'/>
    </IconButton>
  );
  expect(screen.getByTestId(/testDiv/i)).toBeInTheDocument();
});

test('icon botton fires onClick', () => {
  const onClick = jest.fn();

  render(
    <IconButton onClick={onClick}/>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
