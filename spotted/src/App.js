import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Opening from "./components/opening/Opening";
import CreateThread from "./components/createThread/CreateThread";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Opening} exact />
          <Route path="/main" component={Home} />
          <Route path="/create" component={CreateThread} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
