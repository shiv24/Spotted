import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="opening-header">
          <h1>Spotted</h1>
        </header>
        <h5> Open Threads </h5>
        <div className="openThreads" />
        <button className="tCreate"> Create New Thread </button>
      </div>
    );
  }
}

export default Home;
