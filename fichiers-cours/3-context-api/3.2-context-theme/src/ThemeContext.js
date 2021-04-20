import { createContext, useState, useMemo } from "react";

const THEME = {
  light: { background: "#ecf0f1", color: "#282c34" },
  dark: { background: "#282c34", color: "#ecf0f1" },
};

export const ThemeContext = createContext(THEME.dark);

//Provider
const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

//Consumer

export default ThemeProvider;
