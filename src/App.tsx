import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import Loader from './shared/Loader/Loader';
import Routes from './Routes';

const App: React.FC = () => {  

  const [loader, setloader] = useState(false);

  useEffect(() => {
    setTimeout(() => setloader(true), 1000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Loader isLoader={!loader} />
      <ThemeProvider theme={createTheme}>
        <Switch>
          {
          Routes.map((route: any) => {
            return <Route
                exact
                path={route.path}
                component={route.component}
                key={route.path}
              />
            })
          }
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;