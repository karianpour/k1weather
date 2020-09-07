import React from 'react';
import TopCityList from '../containers/TopCityList';
import { useAppState } from '../state/weather-state';
import FavoriteCityList from '../containers/FavoriteCityList';
import Scaffold from '../containers/Scaffold';
import { useTranslation } from 'react-i18next';
import LinkButton from '../components/LinkButton';

const Home: React.FC = () => {

  const state = useAppState();
  const { t } = useTranslation();

  React.useEffect(()=>{
    state.init();
  });

  return (
    <Scaffold>
      <h1>{t('home')}</h1>
      <LinkButton to='/currentLocation'>{t('showCurrentLocationWeather')}</LinkButton>
      <FavoriteCityList/>
      <TopCityList/>
    </Scaffold>
  );
}

export default Home;
