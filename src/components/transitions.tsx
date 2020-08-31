import { createUseStyles, Theme } from '../theme';

export const useFadeTransitionStyles = createUseStyles<Theme>(theme => ({
  enter: {
    opacity: 0,
  },
  enterActive: {
    opacity: 1,
    transition: 'opacity 500ms ease-in',
  },
  exit: {
    opacity: 1,
  },
  exitActive: {
    opacity: 0,
    transition: 'opacity 500ms ease-out',
  },
}));

