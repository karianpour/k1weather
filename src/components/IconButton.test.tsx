import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from './IconButton';
import { ThemeProvider } from 'react-jss';
import { lightTheme } from '../theme';

test('renders icon botton', () => {

  const onClick = jest.fn();

  render(
    <ThemeProvider theme={lightTheme}>
      <IconButton className={'testClass'} onClick={onClick}>
        <div data-testid='testDiv'/>
      </IconButton>
    </ThemeProvider>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('testClass');
  expect(screen.getByTestId(/testDiv/i)).toBeInTheDocument();

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
