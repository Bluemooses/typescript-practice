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
import RegisterPage from "../Components/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
