import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import CityWeatherCard from './CityWeatherCard';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { useFadeTransitionStyles } from '../components/transitions';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
  },
  title: {
    textAlign: 'center',
    backgroundColor: theme.primary.light,
    padding: '8px 0',
    borderRadius: 4,
  },
  cities: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));



const FavoriteCityList: React.FC = observer(() => {

  const theme = useTheme();
  const classes = useStyles({theme});
  const transitionClasses = useFadeTransitionStyles({theme});
  const { t } = useTranslation();

  const state = useAppState();

  return (
    <div className={classes.root}>
      <CSSTransition in={state.favoriteCities.length > 0} unmountOnExit timeout={500} classNames={transitionClasses}>
        <h2 className={classes.title}>{t('favorite_city_list_title')}</h2>
      </CSSTransition>
      <TransitionGroup className={classes.cities}>
        {state.favoriteCities?.map( city => (
          <CSSTransition key={city.name} timeout={500} classNames={transitionClasses}>
            <CityWeatherCard city={city} inFavorite/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default FavoriteCityList;
