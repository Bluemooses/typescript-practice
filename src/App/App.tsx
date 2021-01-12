import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
//Components
import Homepage from "../Components/Homepage/Homepage";
import Nav from "../Components/Nav/Nav";
import Login from "../Components/Login/Login";

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
    console.log(user);
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
