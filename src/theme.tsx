export { createUseStyles, useTheme } from 'react-jss';

export const lightTheme = {
  background: {
    main: '#fafafa',
  },
  primary: {
    main: '#3d5afe',
    light: '#8187ff',
    dark: '#0031ca',
    text: '#fff'
  },
  secondary: {
    main: '#455a64',
    light: '#718792',
    dark: '#1c313a',
    text: '#fff',
  },
  action: {
    active: '#333333',
    disabled: '#999999',
  },
  border: {
    main: '#999999',
  },
  icon: {
    main: '#333333',
  },
  text: {
    primary: '#333333',
  },
  mobileBreakPoint: 480,
  tabletBreakPoint: 1024,
}

export type Theme = typeof lightTheme;

