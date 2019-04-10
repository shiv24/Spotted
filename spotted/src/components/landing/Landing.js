import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

class Landing extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `home`;
    console.log(path);
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="Landing">
        <header className="logo">
          <h1>Spotted </h1>
        </header>

        <form ref="form" onSubmit={this.handleSubmit}>
          <h5>
            {" "}
            Are you 18 years or older
            <input type="checkbox" />
          </h5>

          <Link
            to={{
              pathname: "/locale",
              state: {
                area: "Toronto"
              }
            }}
          >
            <button>Go</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Landing;
