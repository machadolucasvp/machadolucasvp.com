import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

// TODO: styles.scss --dark-color and --light-color isn't sync with themeColorMapper
const buildTheme = (type = 'light') => {
  const themeColorMapper = {
    dark: '#282828',
    light: '#ffffff',
  };
  return { type, color: themeColorMapper[type] };
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ type: 'dark', color: '#282828' });

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
