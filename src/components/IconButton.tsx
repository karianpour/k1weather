import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import clsx from 'clsx';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    display: 'inline-flex',
    textAlign: 'center',
    flex: '0 0 auto',
    padding: 8,
    borderRadius: '50%',
    overflow: 'visible', // Explicitly set the default value to solve a bug on IE 11.
    color: theme.icon.main,
    border: 0,
    margin: '0 4px',
    cursor: 'pointer',
    transition: 'background-color 300ms ease',
    '&:hover': {
      backgroundColor: `${theme.primary.main}44`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      backgroundColor: 'transparent',
      color: theme.action.disabled,
    },    
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
}));

export const IconButton: React.FC<any> = ({children, className, ...rest}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <button className={clsx(classes.root, className)} {...rest}>
      {children}
    </button>
  )
}
