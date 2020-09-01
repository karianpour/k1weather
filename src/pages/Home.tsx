import React from 'react';
// import { createUseStyles, useTheme, Theme } from '../theme';
import TopCityList from '../containers/TopCityList';
import { useAppState } from '../state/weather-state';
import FavoriteCityList from '../containers/FavoriteCityList';
import Scaffold from '../containers/Scaffold';
import { useTranslation } from 'react-i18next';

// const useStyles = createUseStyles<Theme>(theme => ({
//   root: {
//     backgroundColor: theme.colorPrimary,
//     color: theme.textPrimary,
//   },
// }));

const Home: React.FC = () => {

  const state = useAppState();
  const { t } = useTranslation();

  React.useEffect(()=>{
    state.init();
  });
  // const theme = useTheme();
  // const classes = useStyles({theme});

  return (
    <Scaffold>
      <h1>{t('home')}</h1>
      <FavoriteCityList/>
      <TopCityList/>
    </Scaffold>
  );
}

export default Home;
