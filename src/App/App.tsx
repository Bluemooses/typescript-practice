import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import Homepage from "../Components/Homepage/Homepage";
import Nav from "../Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
