import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ICityState, useAppState } from '../state/weather-state';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },
}));

const CityWeatherCard: React.FC<{city: ICityState}> = observer(({city}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const state = useAppState();

  const removeFromTopCity = () => {
    city && state.removeFromTopCity(city);
  }

  const favorite = city?.isFavorite();

  return (
    <div className={classes.root}>
      <Link to={`/city/${city.name}`}>
        {city.name}
        <div>
          {city.currentWeather && <span>{city.currentWeather.temperature}</span>}
          {!city.currentWeather && <span>...</span>}
        </div>
      </Link>
      {!favorite && <button onClick={removeFromTopCity}>remove</button>}
    </div>
  );
});

export default CityWeatherCard;
