import React, { Component } from "react";

class Opening extends Component {
  render() {
    return (
      <div className="opening">
        <header className="opening-header">
          <h1>Spotted </h1>
        </header>

        <form ref="form" onSubmit={this.handleSubmit}>
          <h5>
            {" "}
            Are you 18 years or older<input type="checkbox" />
          </h5>
          <button type="submit">Continue</button>
        </form>
      </div>
    );
  }
}

export default Opening;
