import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App, { DefaultLoadingIndicator } from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'react-jss';
import {theme} from './theme';
import './locale/i18n';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<DefaultLoadingIndicator />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
