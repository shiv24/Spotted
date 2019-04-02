import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing.js";
import CreateThread from "./components/createThread/CreateThread";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/home" component={Home} />
          <Route path="/create" component={CreateThread} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
