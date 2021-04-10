import Grid from "./Grid";
import Table from "./Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Les libraries Javascript</h1>
      <header className="App-header">
        <div style={{ width: "50%" }}>
          <Table items={items} />
        </div>
      </header>
    </div>
  );
}

export default App;
