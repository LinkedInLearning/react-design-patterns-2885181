import MouseTrackerWithLogo, { libraries } from "./MouseTrackerWithLogo";
import angularLogo from "../svg/angular-logo.svg";
import "./App.css";

const AngularLibrary = () => {
  return (
    <MouseTrackerWithLogo
      library={libraries.Angular}
      data={({ position, library }) => {
        return (
          <>
            <img
              src={angularLogo}
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
              href={library.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn {library.name}
            </a>
          </>
        );
      }}
    ></MouseTrackerWithLogo>
  );
};
export default AngularLibrary;
