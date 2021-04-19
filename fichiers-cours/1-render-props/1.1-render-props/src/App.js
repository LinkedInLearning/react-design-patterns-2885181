import { useState, useEffect } from "react";
import reactLogo from "./svg/react-logo.svg";
import angularLogo from "./svg/angular-logo.svg";
import "./App.css";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleOnMouseMove = (event) => {
    /* update mouse position */
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    /* display mouse position */
    console.log(position);
  }, [position]);

  return (
    <header className="App-header" onMouseMove={handleOnMouseMove}>
      <img
        src={angularLogo}
        className="App-logo"
        alt="logo"
        style={{ position: "absolute", left: position.x, top: position.y }}
      />
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
  );
};

function App() {
  return (
    <div className="App">
      <MouseTracker />
    </div>
  );
}

export default App;
