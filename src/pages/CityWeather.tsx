import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useParams } from 'react-router-dom';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import Scaffold from '../containers/Scaffold';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },
}));

const CityWeather: React.FC = observer(() => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const {country, region, name} = useParams<{country: string, region: string, name: string}>();
  const state = useAppState();

  const city = state.findCity(country, region, name);

  React.useEffect(() => {
    !city && state.fetchCity(name);
  }, [city, name, state]);

  const addToFavorite = () => {
    city && state.addToFavorite(city);
  }

  const removeFromFavorite = () => {
    if(city) {
      state.removeFromFavorite(city);
      state.addToTopCity(city);
    }
  }

  const favorite = city?.isFavorite();

  return (
    <Scaffold>
      <div className={classes.root}>
        {city && <div>
          City {city.name}
          {city.currentWeather && <>Temp {city.currentWeather?.temp_c}</>}
          {!city.currentWeather && <>:D</>}
          {city.currentWeather && !favorite && <button onClick={addToFavorite}>add fav</button>}
          {city.currentWeather && favorite && <button onClick={removeFromFavorite}>remove fav</button>}
        </div>}
        {!city && <span>...</span>}
      </div>
    </Scaffold>
  );
});

export default CityWeather;
