import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import Lookup from './Lookup';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.background.main,
  },
  container: {
    width: '100%',    
    margin: '0 auto',
    padding: '0 24px',
    maxWidth: 972,
  },
  '@media (max-width: 1024px)': {
    container: {
      maxWidth: 680,
    }
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '0 8px',
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 48,
    padding: 8,
    marginBottom: 16,
    color: theme.primary.text,
    backgroundColor: theme.primary.main,
  },
  footer: {
    marginTop: 24,
    color: theme.secondary.text,
    backgroundColor: theme.secondary.main,
    fontSize: 12,
    padding: '0 12px',
    '& a':{
      color: theme.background.main,
    }
  },
}));

const Scaffold: React.FC = ({children}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Lookup/>
      </header>
      <div className={classes.container}>
        {children}
      </div>
      <footer className={classes.footer}>
        <WeatherApiLinkBack/>
      </footer>
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