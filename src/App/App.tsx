import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import Homepage from "../Components/Homepage/Homepage";
import Nav from "../Components/Nav/Nav";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    async function fetchUser() {
      const response = await axios.get("/api/user", config);
      const userObject = response.data;
      setUser(userObject);
    }
    fetchUser();
  }, [user]);

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
