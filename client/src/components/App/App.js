import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//import components
import Landing from "../Landing";
import About from "../About";
import Search from "../Search";
import Profile from "../Profile";
import Error from "../Error";

//import getRequest from "../../utils/getRequest";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
