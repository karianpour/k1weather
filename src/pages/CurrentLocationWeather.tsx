import React from 'react';
import { useAppState, ICityState } from '../state/weather-state';
import Scaffold from '../containers/Scaffold';
import { useTranslation } from 'react-i18next';
import CityDetails from '../containers/CityDetails';
import LoadingIndicator from '../components/LoagingIndicator';

const CurrentLocationWeather: React.FC = () => {

  const state = useAppState();
  const { t } = useTranslation();
  const [ city, setCity ] = React.useState<ICityState | undefined>(undefined);
  const [ error, setError ] = React.useState<string>('');


  React.useEffect(()=> {
    (async ()=> {
      try{
        const city = await state.currentLocationWeather();
        if(city){
          setCity(city);
        }
      }catch(err){
        setError(err.message);
      }
    })();
  }, [setCity, setError, state]);

  return (
    <Scaffold>
      <h1>{t('currentLocationWeather')}</h1>
      {city && <CityDetails city={city} />}
      {error && <div>{t(error)}</div>}
      {!city && !error && <LoadingIndicator />}
    </Scaffold>
  );
}

export default CurrentLocationWeather;
