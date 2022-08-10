import React, { useState } from 'react';
//import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import NavRoute from './components/NavRoute';
import { font, light, dark, borderRadius } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import ThemeToggle from './components/ThemeToggle';
function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState({
    borderRadius: borderRadius,
    palette: light,
    font: font,
  });
  const toggleMode = () => {
    // if the theme is not light, then set it to dark
    if (mode === 'light') {
      setMode('dark');
      setTheme({ ...theme, palette: dark });
      // otherwise, it should be light
    } else {
      setMode('light');
      setTheme({ ...theme, palette: light });
    }
    console.log(theme.palette);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeToggle toggle={toggleMode} mode={mode} />
        <NavRoute />
      </ThemeProvider>
    </>
  );
}

export default App;
