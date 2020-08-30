import React from 'react';
import { Link } from "react-router-dom";
import { createUseStyles, useTheme, Theme } from '../theme';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import CityWeatherCard from './CityWeatherCard';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {

    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },

}));

const FavoriteCityList: React.FC = observer(() => {

  const theme = useTheme();
  const classes = useStyles({theme});
  const { t } = useTranslation();

  const state = useAppState();

  return (
    <div className={classes.root}>
      FavoriteList
      {state.favoriteCities?.map( city => (
        <CityWeatherCard key={city.name} city={city}/>
      ))}
    </div>
  );
});

export default FavoriteCityList;
