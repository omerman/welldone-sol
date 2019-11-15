import React from 'react';
import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({});

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}