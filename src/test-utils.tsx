import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { lightTheme } from './theme';
import { AppStoreContext, createTestStore, IAppState } from './state/weather-state';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useLocalStore } from 'mobx-react-lite';

export const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions & {store?: IAppState}, 'queries'>): RenderResult => {
  const AllTheProviders: React.FC = ({ children }) => {
    const store = useLocalStore<IAppState>(() => options?.store || createTestStore({}));

    return (
      <AppStoreContext.Provider value={store}>
        <ThemeProvider theme={lightTheme}>
          <Router>
            {children}
          </Router>
        </ThemeProvider>
      </AppStoreContext.Provider>
    )
  }

  return render(ui, { wrapper: AllTheProviders, ...options })
}

// re-export everything
export * from '@testing-library/react';

export { customRender as render };