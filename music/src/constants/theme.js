import { createMuiTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor, secondaryColor } from './colors';
 

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      primary: neutralColor,
    },
  },
});