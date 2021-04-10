import { useState, useEffect } from "react";
import reactLogo from "./svg/react-logo.svg";
import angularLogo from "./svg/angular-logo.svg";
import "./App.css";

/*

 1 - position x and y on mouse move
 2 - console.log(x, y)
 3 - move logo with position x and y
 4 - 
à présent comment faire pour appliquer la même logique à un autre composant ou élément
on a plusieurs logos 
ex = Vue, Angular
-  On pourrait tout simplement changer la src de l'image 
- changer les valeurs de propriétés CSS

- que faire si je change de configuration ou même de css pour un composant ou un autre
- changer avec logo Angular. Toutefois, ça reste statique
- Ici, je n ai pas beaucoup de marge de manoeuvre pour change la présentation de mon composant à moins de créer 2 composants.
  - je change le logo
  - je change les couleurs
je dois obligatoirement passer par le mousetracker.
or la responsabilité du mousetracker n est pas de recevoir des information de style pour le logo
Mission Mousetracker = suivre et appliquer la position de la souris
Autre problématique : ce sont les adhérances qe
Logo : souhaite partager le meme comportement en conservant leur particularité pour chaque logo :
 -  palette couleurs, 
 -  couleur arrière plan

 Solution : props de rendu
 - isoler du comportement
 - et de partager ce comportement avec des composants

*/

const MouseTracker = () => {
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
    <header className="App-header" onMouseMove={handleOnMouseMove}>
      <img
        src={reactLogo}
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
