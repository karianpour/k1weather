import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ICityState, useAppState } from '../state/weather-state';
import DeleteIcon from '../components/icons/DeleteIcon';
import IconButton from '../components/IconButton';
import FavoriteIcon from '../components/icons/FavoriteIcon';
import FavoriteOutlineIcon from '../components/icons/FavoriteOutlineIcon';
import clsx from 'clsx';
import LoadingIndicator from '../components/LoagingIndicator';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    margin: 8,
    padding: '16px',
    borderRadius: '4px',
    // border: `1px solid ${theme.border.main}`,
    width: 'calc(33% - 14px)',
    boxShadow: theme.shadow.paper,
    backgroundColor: theme.background.paper,
  },
  '@media (max-width: 1024px)': {
    root: {
      width: 'calc(50% - 16px)',
    }
  },
  '@media (max-width: 480px)': {
    root: {
      width: '100%',
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '24px 0px 8px 8px',
  },
  favorite: {
    color: theme.action.favorite,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
    color: theme.text.secondary,
  },
  temperature: {
    fontSize: 24,
  },
  negative: {
    color: theme.temperature.cold,
  },
  positive: {
    color: theme.temperature.warm,
  },
}));

const CityWeatherCard: React.FC<{city: ICityState, inFavorite?: boolean, inTopCity?: boolean}> = observer(({city, inFavorite, inTopCity}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const state = useAppState();

  const removeFromTopCity = (event: React.MouseEvent) => {
    event.preventDefault();
    city && state.removeFromTopCity(city);
  }

  const removeFromFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    if(city) {
      state.removeFromFavorite(city);
      state.addToTopCity(city);
    }
  }

  const addToFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    city && state.addToFavorite(city);
  }

  const isFavorite = city?.isFavorite();

  const weather = city?.currentWeather;

  return (
    <div className={classes.root}>
      <Link to={!city ? '/' : `/city/${city.country}/${city.region}/${city.name}`}>
        <div className={classes.row}>
          <div>
            <h3>{city?.name}</h3>
            {weather && <div className={classes.date}>{weather.lastUpdate.toLocaleString()}</div>}            
          </div>
          {weather && <div>
            <div className={clsx(classes.temperature, weather.temp_c > 0 ? classes.positive : classes.negative)}>{weather.temp_c > 0 && ('+')}{weather.temp_c}&deg;</div>
          </div>}
          {!weather && <LoadingIndicator />}
        </div>
        <div className={classes.actions}>
          {inFavorite && isFavorite && <IconButton onClick={removeFromFavorite} className={classes.favorite}><FavoriteIcon/></IconButton>}
          {inTopCity && !isFavorite && <IconButton onClick={addToFavorite} className={classes.favorite}><FavoriteOutlineIcon/></IconButton>}
          {inTopCity && !isFavorite && <IconButton onClick={removeFromTopCity}><DeleteIcon/></IconButton>}
        </div>
      </Link>
    </div>
  );
});

export default CityWeatherCard;
