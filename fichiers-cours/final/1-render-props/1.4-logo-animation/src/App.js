import React from "react";
import ReactLogo from "./svg/react-logo.svg";
import AngularLogo from "./svg/angular-logo.svg";
import VueLogo from "./svg/vuejs-logo.svg";
import "./App.css";

function MouseTracker({ library, children }) {
  const [coordinates, setCoordinates] = React.useState({
    position: "relative",
  });
  const [isMoving, setMoving] = React.useState(false);
  const [position, setPosition] = React.useState({});
  const handleOnClick = () => setMoving(!isMoving);
  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };
  React.useEffect(() => {
    isMoving &&
      setPosition((prevState) => ({ ...prevState, position: "absolute" }));
  }, [isMoving]);

  React.useEffect(() => {
    isMoving &&
      setPosition((prevState) => ({
        ...prevState,
        left: coordinates.x,
        top: coordinates.y,
      }));
  }, [coordinates]);
  const styles = React.useMemo(() => {
    if (library.name === "React") {
      return { background: "#282c34", color: "white" };
    }
    if (library.name === "Angular") {
      return { background: "#1976d2", color: "white" };
    }
    if (library.name === "Vue") {
      return { background: "#ecf0f1", color: "black" };
    }
  }, [library]);
  const renderPositions = React.useMemo(() => {
    return { styles: position, ...library };
  }, [position, library]);
  return (
    <div className="App" onMouseMove={handleMouseMove} onClick={handleOnClick}>
      <header className="App-header" style={styles}>
        {children(renderPositions)}
        <p>
          {isMoving
            ? "Now move the mouse to move the"
            : "Click on Logo to move on mouse movement"}
          <br />
          {isMoving && `x: ${coordinates.x}, y: ${coordinates.y}`}
        </p>
        <a
          className="App-link"
          href={library.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {library.name}
        </a>
      </header>
    </div>
  );
}
function App() {
  let libraries = {
    React: {
      name: "React",
      url: "https://reactjs.org/",
      logo: ReactLogo,
    },
    Vue: {
      name: "Vue",
      url: "https://vuejs.org/",
      logo: VueLogo,
    },
    Angular: {
      name: "Angular",
      url: "https://angular.io/",
      logo: AngularLogo,
    },
  };
  return (
    <MouseTracker library={libraries.Vue}>
      {({ styles, logo }) => (
        <img src={logo} className="App-logo" style={styles} />
      )}
    </MouseTracker>
  );
}

export default App;
