import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
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
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
