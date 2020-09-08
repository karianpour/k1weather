import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { lightTheme } from './theme';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react';

export { customRender as render };