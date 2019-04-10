import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing.js";
import CreateThread from "./components/createThread/CreateThread";
import Home from "./components/home/Home";
import ChooseLocation from "./components/chooseLocation/ChooseLocation";

const MyContext = React.createContext();

class App extends Component {
  state = {
    currLat: "",
    currLong: ""
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setCoordinates: (newLat, newLong) =>
            this.setState({
              currLat: newLat,
              currLong: newLong
            })
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/home" component={Home} />
            <Route path="/locale" component={ChooseLocation} />
            <Route path="/create" component={CreateThread} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </MyContext.Provider>
    );
  }
}

export default App;
