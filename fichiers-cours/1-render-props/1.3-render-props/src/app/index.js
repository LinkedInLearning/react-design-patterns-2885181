import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactLibrary from "./ReactLibrary";
import AngularLibrary from "./AngularLibrary";
import VueLibrary from "./VueLibrary";

const App = () => (
  <Router>
    <Route exact path="/react" component={ReactLibrary} />
    <Route exact path="/angular" component={AngularLibrary} />
    <Route exact path="/vue" component={VueLibrary} />
  </Router>
);
export default App;
