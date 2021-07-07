import React from "react";
import {Router} from "./routes/Router";
import { theme } from "./constants/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
     
      <Router  />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
