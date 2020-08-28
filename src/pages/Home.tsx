import React from 'react';
// import { createUseStyles, useTheme, Theme } from '../theme';
import WeatherList from './WeatherList';

// const useStyles = createUseStyles<Theme>(theme => ({
//   root: {
//     backgroundColor: theme.colorPrimary,
//     color: theme.textPrimary,
//   },
// }));

const Home: React.FC = () => {

  // const theme = useTheme();
  // const classes = useStyles({theme});

  return (
    <WeatherList/>
  );
}

export default Home;
