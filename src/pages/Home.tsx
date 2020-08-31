import React from 'react';
// import { createUseStyles, useTheme, Theme } from '../theme';
import TopCityList from '../containers/TopCityList';
import { useAppState } from '../state/weather-state';
import FavoriteCityList from '../containers/FavoriteCityList';
import Scaffold from '../containers/Scaffold';

// const useStyles = createUseStyles<Theme>(theme => ({
//   root: {
//     backgroundColor: theme.colorPrimary,
//     color: theme.textPrimary,
//   },
// }));

const Home: React.FC = () => {

  const state = useAppState();

  React.useEffect(()=>{
    state.init();
  });
  // const theme = useTheme();
  // const classes = useStyles({theme});

  return (
    <Scaffold>
      <FavoriteCityList/>
      <TopCityList/>
    </Scaffold>
  );
}

export default Home;
