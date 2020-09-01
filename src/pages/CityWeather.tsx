import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useParams, useHistory } from 'react-router-dom';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import Scaffold from '../containers/Scaffold';
import CityDetails from '../containers/CityDetails';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles<Theme>(theme => ({
  title: {
    fontSize: 24,
  },
}));

const CityWeather: React.FC = observer(() => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const {country, region, name} = useParams<{country: string, region: string, name: string}>();
  const state = useAppState();
  const history = useHistory();
  const { t } = useTranslation();

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

  return (
    <Scaffold>
      <h1 className={classes.title}>{t('city_weather_details')}</h1>
      {city && <CityDetails city={city}/>}
      {!city && <span>loading...</span>}
    </Scaffold>
  );
});

export default CityWeather;
