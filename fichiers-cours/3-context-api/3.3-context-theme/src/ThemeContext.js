import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

// Provider
const ThemeProvider = ({ children }) => {
  const [on, setOn] = useState(false);
  const update = () => setOn(!on);
  const value = useMemo(() => {
    return {
      on,
      updateTheme: update,
    };
  });
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
