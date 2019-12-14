import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import Landing from './components/Landing';
import Loader from './shared/Loader/Loader';

const App: React.FC = () => {  

  const [loader, setloader] = useState(false);

  useEffect(() => {
    setTimeout(() => setloader(true), 1000);
  }, []);

  return (
    <>
      <Loader isLoader={!loader} />
      <GlobalStyle />
      <ThemeProvider theme={createTheme}>
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;