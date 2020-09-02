import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { observer } from 'mobx-react-lite';
import { ICityState, useAppState } from '../state/weather-state';
import { IconButton } from '../components/IconButton';
import { FavoriteIcon } from '../components/icons/FavoriteIcon';
import { FavoriteOutlineIcon } from '../components/icons/FavoriteOutlineIcon';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { WindIcon } from '../components/icons/WindIcon';
import { EditIcon } from '../components/icons/EditIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 300,
    borderRadius: '4px',
    // border: `1px solid ${theme.border.main}`,
    boxShadow: theme.shadow.paper,
    backgroundColor: theme.background.paper,
    padding: 12,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '24px 8px 8px 8px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
  },
  favorite: {
    color: theme.action.favorite,
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
  feelslike: {
    fontSize: 12,
    marginTop: 4,
  },
  condition: {
    width: 64,
    height: 64,
  },
  wind: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  windSpeed: {
    fontSize: 14,
    marginTop: 4,
  },
  gust: {
    color: theme.text.secondary,
    fontSize: 10,
    marginTop: 4,
  },
  data: {
    display: 'flex',
    flexDirection: 'column',
  },
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 10,
    color: theme.text.secondary,
  },
  value: {
    fontSize: 14,
  },
  noteView: {
    marginTop: 24,
  },
  notePre: {
    marginTop: 8,
    maxHeight: 200,
    overflow: 'auto',
  },
  note: {
    marginTop: 8,
    opacity: 0,
    transition: 'opacity 200ms ease',
  },
  noteEditing: {
    opacity: 1,
  },
  noteArea: {
    height: 200,
    width: '100%',
    overflow: 'auto',
  },
}));

const CityDetails: React.FC<{city: ICityState}> = observer(({city}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const { t } = useTranslation();

  const [ editing, setEdititing ] = React.useState(false);

  const state = useAppState();

  const addToFavorite = () => {
    city && state.addToFavorite(city);
  }

  const removeFromFavorite = () => {
    if(city) {
      state.removeFromFavorite(city);
      state.addToTopCity(city);
    }
  }

  const toggleEditNote = () => {
    setEdititing( e => !e );
  }

  const favorite = city?.isFavorite();

  const weather = city.currentWeather;

  return (
    <div className={classes.root}>
      {city && <>
        <div>
          <h2>
            {city.name}
          </h2>
          {weather && <>
            <div className={classes.row}>
              <div>
                <div className={clsx(classes.temperature, weather.temp_c > 0 ? classes.positive : classes.negative)}>{weather.temp_c > 0 && ('+')}{weather.temp_c}&deg;</div>
                <div className={classes.feelslike}>
                  {t('feels_like')}&nbsp;
                  <span className={clsx(weather.feelslike_c > 0 ? classes.positive : classes.negative)}>{weather.feelslike_c > 0 && ('+')}{weather.feelslike_c}&deg;</span>
                </div>
              </div>
              <div className={classes.condition}>
                <img alt={weather.condition.text} src={weather.condition.icon}/>
              </div>
              <div className={classes.wind}>
                <WindIcon style={{transform: `rotate(${weather.wind_degree}deg)`}}/>
                <div>{weather.wind_kph}&nbsp;{t('kph')}</div>
                <div className={classes.gust}>{t('gust')}&nbsp;{weather.gust_kph}&nbsp;{t('kph')}</div>
              </div>
            </div>
            <div className={classes.row}>
              <Data label={t('uv')} value={weather.uv} align="start"/>
              <Data label={t('humidity')} value={weather.humidity} align="end"/>
            </div>
            <div className={classes.row}>
              <Data label={t('vis')} value={`${weather.vis_km} ${t('km')}`} align="start"/>
              <Data label={t('precip')} value={`${weather.precip_mm} ${t('mm')}`} align="center"/>
              <Data label={t('pressure')} value={`${weather.pressure_mb} ${t('mb')}`} align="end"/>
            </div>
            <div className={classes.noteView}>
              <div>{t('note')}</div>
              {!editing && <pre className={classes.notePre}>{city.note}</pre>}
              <EditNote editing={editing} city={city}/>
            </div>
          </>}
          {!weather && <>:D</>}
        </div>

        <div className={classes.actions}>
          {weather && <IconButton onClick={toggleEditNote}><EditIcon/></IconButton>}
          {weather && favorite && <IconButton className={classes.favorite} onClick={removeFromFavorite}><FavoriteIcon/></IconButton>}
          {weather && !favorite && <IconButton className={classes.favorite} onClick={addToFavorite}><FavoriteOutlineIcon/></IconButton>}
        </div>
      </>}
      {!city && <span>...</span>}
    </div>
  );
});

export default CityDetails;


const Data: React.FC<{label: string, value: string | number, align: 'end' | 'center' | 'start'}> = ({label, value, align}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <div className={clsx(classes.data, classes[align])}>
      <div className={classes.value}>{value}</div>
      <div className={classes.label}>{label}</div>
    </div>
  );
} 

const EditNote: React.FC<{editing: boolean, city: ICityState}> = ({editing, city}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    city.setNote(event.currentTarget.value);
  }

  return (
    <div className={clsx(classes.note, editing && classes.noteEditing)}>
      {editing && <>
        <textarea defaultValue={city.note} onChange={handleChange} className={classes.noteArea}/>
      </>}
    </div>
  );
} 