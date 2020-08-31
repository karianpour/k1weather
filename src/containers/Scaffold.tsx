import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import Lookup from './Lookup';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },
}));

const Scaffold: React.FC = ({children}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <div className={classes.root}>
      <Lookup/>
      {children}
      <WeatherApiLinkBack/>
    </div>
  );
};

export default Scaffold;


const WeatherApiLinkBack: React.FC = () => {
  return (
    <div>
      Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
    </div>
  )
};