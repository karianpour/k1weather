import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useParams, useHistory } from 'react-router-dom';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import Scaffold from '../containers/Scaffold';
import { IconButton } from '../components/IconButton';
import { FavoriteIcon } from '../components/icons/FavoriteIcon';
import { FavoriteOutlineIcon } from '../components/icons/FavoriteOutlineIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 300,
    borderRadius: '4px',
    border: `1px solid ${theme.border.main}`,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 8,
  },
}));

const CityWeather: React.FC = observer(() => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const {country, region, name} = useParams<{country: string, region: string, name: string}>();
  const state = useAppState();
  const history = useHistory();

  const city = state.findCity(country, region, name);

  React.useEffect(() => {
    if(!city) {
      (async () => {
        const newCity = await state.fetchCity(name);
        if(newCity){
          if(newCity.country !== country || newCity.region !== region || newCity.name !== name){
            history.replace(`/city/${newCity.country}/${newCity.region}/${newCity.name}`);
          }
        }
      })();
    }
  }, [city, country, region, name, state, history]);

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
        {city && <>
          City {city.name}
          {city.currentWeather && <>Temp {city.currentWeather?.temp_c}</>}
          {!city.currentWeather && <>:D</>}

          <div className={classes.actions}>
            {city.currentWeather && favorite && <IconButton onClick={removeFromFavorite}><FavoriteIcon/></IconButton>}
            {city.currentWeather && !favorite && <IconButton onClick={addToFavorite}><FavoriteOutlineIcon/></IconButton>}
          </div>
        </>}
        {!city && <span>...</span>}
      </div>
    </Scaffold>
  );
});

export default CityWeather;
