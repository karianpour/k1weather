import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
  },
}));

const NoMatch: React.FC = () => {

  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <div className={classes.root}>
      404 - Not Found
    </div>
  );
}

export default NoMatch;
