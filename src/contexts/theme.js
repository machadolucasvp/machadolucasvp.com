import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(null);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
