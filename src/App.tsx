import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createUseStyles, useTheme, Theme } from './theme';
import { AppStateProvider } from './state/weather-state';

const NoMatch = lazy(() => import('./pages/NoMatch'));
const Home = lazy(() => import('./pages/Home'));
const CityWeather = lazy(() => import('./pages/CityWeather'));

const useStyles = createUseStyles<Theme>(theme => ({
  '@global': {
    html: {
      backgroundColor: theme.background,
    },
    body: {
      margin: 0,
    },
    'html *': {
      fontFamily: 'Yekan Bakh',
    },
  },

}));

const App: React.FC = () => {

  const theme = useTheme();
  useStyles({ theme });

  return (
    <AppStateProvider >
      <Router>
        <Switch>
          <Route path="/city/:name">
            <CityWeather />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppStateProvider>
  );
}

export default App;

export const DefaultLoadingIndicator = () => (
  <div>
    Loading...
  </div>
);
