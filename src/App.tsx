import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import Routes from './Routes';

const App: React.FC = () => {  

  return (
    <>
      <GlobalStyle />
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