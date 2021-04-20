// import ThemeContext
import ThemeProvider, { ThemeContext } from "./ThemeContext";
import { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const style = useMemo(() => {}, []);
  const buttonStyle = useMemo(() => {}, []);
  return (
    <div className="App">
      <ThemeContext.Consumer>
        {({ on, updateTheme }) => {
          return (
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
                onClick={() => {}}
                style={{ ...buttonStyle, padding: "10px 20px", fontSize: 20 }}
              >
                On
              </button>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default App;
