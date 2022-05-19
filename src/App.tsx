import * as React from "react";
import Nav from "./components/Nav"
import ScrollSection1 from "./components/ScrollSection1";
import './App.css';

function App() {
  const [check, setCheck] = React.useState<number>(0);

  return (
    <div className="App">
      <Nav></Nav>
      <ScrollSection1></ScrollSection1>
    </div>
  );
}

export default App;
