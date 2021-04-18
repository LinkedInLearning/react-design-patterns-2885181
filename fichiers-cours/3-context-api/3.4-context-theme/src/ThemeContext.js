import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

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

// HOC

export default ThemeProvider;
