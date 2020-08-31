import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import CityWeatherCard from './CityWeatherCard';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
  },
  title: {
    textAlign: 'center',
    backgroundColor: theme.primary.light,
    padding: '8px 0'
  },
  cities: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

const FavoriteCityList: React.FC = observer(() => {

  const theme = useTheme();
  const classes = useStyles({theme});
  const { t } = useTranslation();

  const state = useAppState();

  if(state.favoriteCities.length === 0){
    return null;
  }

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('favorite_city_list_title')}</h2>
      <div className={classes.cities}>
        {state.favoriteCities?.map( city => (
          <CityWeatherCard key={city.name} city={city}/>
        ))}
      </div>
    </div>
  );
});

export default FavoriteCityList;
