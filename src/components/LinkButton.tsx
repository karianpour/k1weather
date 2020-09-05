import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    display: 'inline-flex',
    textAlign: 'center',
    flex: '0 0 auto',
    padding: 8,
    borderRadius: 8,
    color: theme.icon.main,
    border: `1px solid ${theme.border.main}`,
    margin: '0 4px',
    cursor: 'pointer',
    transition: 'background-color 300ms ease',
    backgroundColor: theme.background.paper,
    '&:hover': {
      backgroundColor: `${theme.primary.main}44`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

export const LinkButton: React.FC<{to: string}> = ({children, ...rest}) => {
  const theme = useTheme();
  const classes = useStyles({theme});

  return (
    <Link {...rest}>
      <div className={clsx(classes.root)}>
        {children}
      </div>
    </Link>
  )
}
