import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lighten } from 'polished';

const theme = {
  colors: {
    black: '#212121',
    primary: '#1b5633',
    secondary: `${lighten(0.25, '#1b5633')}`,
    red: '#D50000',
    ltRed: `${lighten(0.5, '#D50000')}`,
    ltGrey: '#eceff1',
    white: '#fff',
  },

  /*
    Import fonts into Layout.js
  */
  fonts: {
    body: 'Roboto, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2.25rem',
    xxl: '2.5rem',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    bolder: 900,
  },

  lineHeight: '1.7rem',
  rootFontSize: '17px',
  rhythm(size = 4) {
    /*
      rootFontSize * lineHeight * 1/4 for more flexiblity
    */
    return `${17 * 1.7 * 0.25 * size}px`;
  },

  viewPort: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1920px',
  },

  gutter: 20,
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
