import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import { ThemeProvider} from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Routes from './routes';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState'

const App: React.FC = () => { 
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
    <Header toggleTheme={toggleTheme}/>

      <Routes />
    </Router>
  </ThemeProvider>
);
}
export default App;
