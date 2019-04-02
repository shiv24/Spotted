import React, { Component } from "react";
import "./CreateThread.css";

class CreateThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threadName: "",
      description: "",
      comment: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="createThread">
        <h1>Spotted </h1>
        <h3>Create a new thread for {this.props.location.state.area} </h3>
        <form ref="form" onSubmit={this.handleSubmit}>
          <br />
          <label>
            Thread Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.threadName}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </label>
          <br />
          <label>
            Comment:
            <input
              type="text"
              name="firstComment"
              onChange={this.handleChange}
              value={this.state.comment}
            />
          </label>
        </form>
        <button type="submit">Continue</button>
      </div>
    );
  }
}

export default CreateThread;
