import { useState, useEffect, useMemo } from "react";
import reactLogo from "../svg/react-logo.svg";
import angularLogo from "../svg/angular-logo.svg";
import vueLogo from "../svg/vuejs-logo.svg";
import "./App.css";

export let libraries = {
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

const MouseTrackerWithLogo = ({ data, library }) => {
  // logique encapsulé ici
  return (
    <div className="App">
      <header
        className="App-header"
        onMouseMove={handleOnMouseMove}
        style={library.style}
      >
        {/* props de rendu */}
      </header>
    </div>
  );
};

export default MouseTrackerWithLogo;
