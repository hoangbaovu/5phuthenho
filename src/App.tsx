import React from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import Landing from './App/Modules/Landing';

const App: React.FC = () => {
  
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={createTheme}>
      <Landing />
    </ThemeProvider>
    </>
  );
}

export default App;