import { BrowserRouter as Router, Route } from "react-router-dom";
import MouseTrackerA from "./MouseTrackerA";
import MouseTrackerB from "./MouseTrackerB";

const App = () => (
  <Router>
    <Route exact path="/react" component={MouseTrackerA} />
    <Route exact path="/angular" component={MouseTrackerB} />
  </Router>
);
export default App;
