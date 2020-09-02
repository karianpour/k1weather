export { createUseStyles, useTheme } from 'react-jss';

export const lightTheme = {
  background: {
    main: '#f5f5f5',
    paper: '#fff',
  },
  primary: {
    main: '#3d5afe',
    light: '#8187ff',
    dark: '#43658b',
    text: '#fff'
  },
  secondary: {
    main: '#4e89ae',
    light: '#718792',
    dark: '#1c313a',
    text: '#fff',
  },
  action: {
    active: '#333333',
    disabled: '#999999',
    favorite: '#ed6663',
  },
  border: {
    main: '#999999',
  },
  icon: {
    main: '#717171',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
  },
  temperature: {
    cold: 'blue',
    warm: 'red',
  },
  shadow: {
    paper: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  mobileBreakPoint: 480,
  tabletBreakPoint: 1024,
}

export type Theme = typeof lightTheme;

