import { useState, useEffect } from "react";
import angularLogo from "../svg/angular-logo.svg";
import "./App.css";

const AngularLibrary = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleOnMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <div className="App">
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
          Learn Angular
        </a>
      </header>
    </div>
  );
};
export default AngularLibrary;
