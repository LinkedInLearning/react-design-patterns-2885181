import { useMemo, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import logo from "./logo.svg";
import "./App.css";

const THEME = {
  light: { background: "#ecf0f1", color: "#282c34" },
  dark: { background: "#282c34", color: "#ecf0f1" },
};
function App() {
  const { on, updateTheme } = useContext(ThemeContext);
  const style = useMemo(() => {
    return on ? THEME.light : THEME.dark;
  }, [on]);
  const buttonStyle = useMemo(() => {
    return !on ? THEME.light : THEME.dark;
  }, [on]);
  return (
    <div className="App">
      <header className="App-header" style={style}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button
          onClick={updateTheme}
          style={{ ...buttonStyle, padding: "10px 20px", fontSize: 20 }}
        >
          {on ? "Off" : "On"}
        </button>
      </header>
    </div>
  );
}
export default App;
