import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import Lookup from './Lookup';
import { Link } from 'react-router-dom';
import HomeIcon from '../components/icons/HomeIcon';
import OfflineIcon from '../components/icons/OfflineIcon';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.background.main,
    minHeight: '100vh',
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
    justifyContent: 'space-between',
    height: 48,
    padding: 8,
    marginBottom: 16,
    color: theme.primary.text,
    backgroundColor: theme.primary.main,
  },
  home: {
    color: theme.primary.text,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginTop: 24,
    color: theme.secondary.text,
    backgroundColor: theme.secondary.main,
    fontSize: 12,
    padding: '6px 12px',
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
        <ConnectionMonitor/>
        <Link to="/" className={classes.home}>
          <HomeIcon/>
        </Link>
      </header>
      <div className={classes.container}>
        {children}
      </div>
      <footer className={classes.footer}>
        <WeatherApiLinkBack/>
        <Version/>
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

const Version: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('version')}: {process.env.REACT_APP_VERSION}
    </div>
  )
};


const ConnectionMonitor: React.FC = observer(() => {
  const state = useAppState();
  return <>
    {state.offline && <OfflineIcon />}
  </>
});