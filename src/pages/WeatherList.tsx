import React from 'react';
import { Link } from "react-router-dom";
import { createUseStyles, useTheme, Theme } from '../theme';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {

    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },

}));

const WeatherList: React.FC = () => {

  const theme = useTheme();
  const classes = useStyles({theme});
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      List
      <Link to={`/city/1234`}>{t('ttest')} 1</Link>
      <div onClick={() => i18n.changeLanguage('de')}>de</div>
    </div>
  );
}

export default WeatherList;
