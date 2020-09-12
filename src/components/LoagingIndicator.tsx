import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import LoadingIcon from './icons/LoadingIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  loading: {
    color: theme.primary.main,
    width: 50,
    heigh: 50,
  },
}));

const LoadingIndicator = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <LoadingIcon role="loading" className={classes.loading}/>
  )
};

export default LoadingIndicator;