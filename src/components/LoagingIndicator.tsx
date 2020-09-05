import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { LoadingIcon } from './icons/LoadingIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  loading: {
    color: theme.primary.main,
    width: 50,
    heigh: 50,
  },
}));

export const LoadingIndicator = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div>
      <LoadingIcon className={classes.loading}/>
    </div>
  )
};
