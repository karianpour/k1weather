import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import Lookup, { KeyCode } from './Lookup';
import userEvent from '@testing-library/user-event';
import { createTestStore } from '../state/weather-state';

test('renders Lookup', async () => {
  const store = createTestStore({});

  render(
    <Lookup />,
    {
      store,
    }
  );

  expect(screen.getByRole("combobox")).toBeInTheDocument();
  {
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
  }

  {
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass('queryFocused-0-2-6');
    await userEvent.type(input, 'city name');
    await new Promise((resolve) => setTimeout(resolve, 350));// the debounce time
    expect(store.lookup).toBe('city name');

    expect(screen.getByText("City2")).toBeInTheDocument();
    expect(screen.getByText("City3")).toBeInTheDocument();

    fireEvent.keyDown(input, { keyCode: KeyCode.DOWN });
    fireEvent.keyUp(input, { keyCode: KeyCode.DOWN });
    expect(store.lookupActiveIndex).toBe(0);
    fireEvent.keyDown(input, { keyCode: KeyCode.DOWN });
    fireEvent.keyUp(input, { keyCode: KeyCode.DOWN });
    expect(store.lookupActiveIndex).toBe(1);
    fireEvent.keyDown(input, { keyCode: KeyCode.DOWN });
    fireEvent.keyUp(input, { keyCode: KeyCode.DOWN });
    expect(store.lookupActiveIndex).toBe(0);
    fireEvent.keyDown(input, { keyCode: KeyCode.UP });
    fireEvent.keyUp(input, { keyCode: KeyCode.UP });
    expect(store.lookupActiveIndex).toBe(1);
    fireEvent.keyDown(input, { keyCode: KeyCode.UP });
    fireEvent.keyUp(input, { keyCode: KeyCode.UP });
    expect(store.lookupActiveIndex).toBe(0);


    fireEvent.keyDown(input, { keyCode: KeyCode.ESC });
    fireEvent.keyUp(input, { keyCode: KeyCode.ESC });
    await new Promise((resolve) => setTimeout(resolve, 600));// transition timeout
    expect(screen.queryByText("City2")).toBeNull();
  }

  {
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City2")).toBeInTheDocument();
  }

  {
    const input = screen.getByRole("textbox");

    fireEvent.keyDown(input, { keyCode: KeyCode.TAB });
    fireEvent.keyUp(input, { keyCode: KeyCode.TAB });
    await new Promise((resolve) => setTimeout(resolve, 600));// transition timeout
    expect(screen.queryByText("City2")).toBeNull();
  }

  {
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City2")).toBeInTheDocument();
  }

  {
    const input = screen.getByRole("textbox");
    expect(store.lookupActiveIndex).toBe(0);
    fireEvent.keyDown(input, { keyCode: KeyCode.RETURN });
    fireEvent.keyUp(input, { keyCode: KeyCode.RETURN });
    await new Promise((resolve) => setTimeout(resolve, 600));// transition timeout
  }
  expect(global.window.location.pathname).toEqual('/city/Country2/Region2/City2');

  {
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City2")).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    input.focus();
    input.blur();
    await new Promise((resolve) => setTimeout(resolve, 600));// transition timeout
    expect(screen.queryByText("City2")).toBeNull();
  }

  {
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City3")).toBeInTheDocument();
    fireEvent.click(screen.getByText("City3"));
  }

  expect(global.window.location.pathname).toEqual('/city/Country3/Region3/City3');

  {
    store.setLookupActiveIndex(null);
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City3")).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { keyCode: KeyCode.RETURN });
  }

  {
    store.setLookupActiveIndex(null);
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(screen.queryByText("City3")).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { keyCode: KeyCode.TAB });
  }
});
