import { createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";

const THEME = {
  light: { background: "#ecf0f1", color: "#282c34" },
  dark: { background: "#282c34", color: "#ecf0f1" },
};
//create context
const ThemeContext = createContext(THEME.light);

function App() {
  // use context (hook)
  const style = useContext(ThemeContext);
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
      </header>
    </div>
  );
}

export default App;
