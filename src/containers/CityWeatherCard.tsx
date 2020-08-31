import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ICityState, useAppState } from '../state/weather-state';
import { DeleteIcon } from '../components/icons/DeleteIcon';
import { IconButton } from '../components/IconButton';
import { FavoriteIcon } from '../components/icons/FavoriteIcon';
import { FavoriteOutlineIcon } from '../components/icons/FavoriteOutlineIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    margin: 8,
    padding: '8px',
    borderRadius: '4px',
    border: `1px solid ${theme.border.main}`,
    width: 'calc(33% - 14px)',
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
  },
}));

const CityWeatherCard: React.FC<{city: ICityState}> = observer(({city}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const state = useAppState();

  const removeFromTopCity = (event: React.MouseEvent) => {
    event.preventDefault();
    city && state.removeFromTopCity(city);
  }

  const removeFromFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    city && state.removeFromFavorite(city);
  }

  const addToFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    city && state.addToFavorite(city);
  }

  const favorite = city?.isFavorite();

  return (
    <div className={classes.root}>
      <Link to={`/city/${city.country}/${city.region}/${city.name}`}>
        {city.name}
        <div>
          {city.currentWeather && <span>{city.currentWeather.temp_c}</span>}
          {!city.currentWeather && <span>...</span>}
        </div>
        <div className={classes.actions}>
          {favorite && <IconButton onClick={removeFromFavorite}><FavoriteIcon/></IconButton>}
          {!favorite && <IconButton onClick={addToFavorite}><FavoriteOutlineIcon/></IconButton>}
          {!favorite && <IconButton onClick={removeFromTopCity}><DeleteIcon/></IconButton>}
        </div>
      </Link>
    </div>
  );
});

export default CityWeatherCard;
