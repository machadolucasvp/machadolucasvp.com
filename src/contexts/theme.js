import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const buildTheme = (type = 'light') => {
  const themeColorMapper = {
    dark: '#282c35',
    light: '#ffffff',
  };
  return { type, color: themeColorMapper[type] };
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ type: 'dark', color: '#282c35' });

  const _setTheme = (type) => setTheme(buildTheme(type));

  return (
    <ThemeContext.Provider value={{ theme, setTheme: _setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
