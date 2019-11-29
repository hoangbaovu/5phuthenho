import React from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import Landing from './App/Modules/Landing';

const App: React.FC = () => {
  
  return (
    <ThemeProvider theme={createTheme}>
      <Landing />
    </ThemeProvider>
    
  );
}

export default App;