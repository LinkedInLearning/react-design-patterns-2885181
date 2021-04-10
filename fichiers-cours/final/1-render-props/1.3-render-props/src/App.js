import { useState, useEffect, useMemo } from "react";
import reactLogo from "./svg/react-logo.svg";
import angularLogo from "./svg/angular-logo.svg";
import vueLogo from "./svg/vuejs-logo.svg";
import "./App.css";

/*

1. props de rendu
2. function as a children result of props de rendu
3. different layout : TODO

*/

const MouseTrackerWithLogo = ({ children, library }) => {
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

  /*
  - question transversale
  - question d'optimisation
  - function as a children
  autre solution de pattern de conception : on va s'appuyer sur une autre technique qui apporte sa solution : composant d'ordre supérieur
  */
  const values = useMemo(() => {
    return { position: position, library: library };
  }, [position]);
  return (
    <header
      className="App-header"
      onMouseMove={handleOnMouseMove}
      style={library.style}
    >
      {children(values)}
    </header>
  );
};

function App() {
  let libraries = {
    React: {
      name: "React",
      url: "https://reactjs.org/",
      logo: reactLogo,
      style: { background: "#282c34" },
    },
    Vue: {
      name: "Vue",
      url: "https://vuejs.org/",
      logo: vueLogo,
      style: { background: "#ecf0f1", color: "#333" },
    },
    Angular: {
      name: "Angular",
      url: "https://angular.io/",
      logo: angularLogo,
      style: { background: "#1976d2" },
    },
  };
  return (
    <div className="App">
      <MouseTrackerWithLogo library={libraries.Vue}>
        {({ position, library }) => {
          return (
            <>
              <img
                src={library.logo}
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
      </MouseTrackerWithLogo>
    </div>
  );
}

export default App;
