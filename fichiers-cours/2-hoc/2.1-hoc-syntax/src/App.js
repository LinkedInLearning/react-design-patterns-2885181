import "./App.css";
import reactLogo from "./svg/react-logo.svg";
import angularLogo from "./svg/angular-logo.svg";
import vueLogo from "./svg/vuejs-logo.svg";

// HOC here
const withLibrary = (Component) => (props) => {
  let libraries = {
    React: {
      name: "React",
      url: "https://reactjs.org/",
      logo: reactLogo,
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
  return <Component {...libraries[props.library]} />;
};

function App({ url, name, logo }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {name}
        </a>
      </header>
    </div>
  );
}
export default withLibrary(App);
