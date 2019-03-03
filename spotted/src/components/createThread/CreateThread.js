import React, { Component } from "react";

class CreateThread extends Component {
  render() {
    return (
      <div className="createThread">
        <h1>Spotted </h1>
        <form ref="form" onSubmit={this.handleThreadCreation}>
          <br />
          <label>
            Thread Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <br />
          <label>
            Comment:
            <input type="text" name="firstComment" />
          </label>
        </form>
        <button type="submit">Continue</button>
      </div>
    );
  }
}

export default CreateThread;
