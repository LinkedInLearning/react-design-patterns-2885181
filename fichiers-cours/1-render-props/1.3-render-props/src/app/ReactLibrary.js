import MouseTrackerWithLogo, { libraries } from "./MouseTrackerWithLogo";
import reactLogo from "../svg/react-logo.svg";
import "./App.css";

const ReactLibrary = () => {
  return (
    <MouseTrackerWithLogo
      library={libraries.React}
      data={({ position, library }) => {
        return (
          <>
            <img
              src={reactLogo}
              className="App-logo"
              alt="logo"
              style={{
                position: "absolute",
                left: position.x,
                top: position.y,
              }}
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
              Learn {library}
            </a>
          </>
        );
      }}
    ></MouseTrackerWithLogo>
  );
};
export default ReactLibrary;
