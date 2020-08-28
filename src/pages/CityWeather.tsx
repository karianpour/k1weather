import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useParams } from 'react-router-dom';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },
}));

const CityWeather: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const params = useParams<{name: string}>();

  return (
    <div className={classes.root}>
      City {params.name}
    </div>
  );
}

export default CityWeather;
