import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactLibrary from "./ReactLibrary";
import AngularLibrary from "./AngularLibrary";

const App = () => (
  <Router>
    <Route exact path="/react" component={ReactLibrary} />
    <Route exact path="/angular" component={AngularLibrary} />
  </Router>
);
export default App;
