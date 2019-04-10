import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChooseLocation.css";
import MapComponent from "../mapComponent/MapComponent";

class ChooseLocation extends Component {
  render() {
    return (
      <div>
        <div class="map-display">
          <MapComponent />
        </div>

        <Link
          to={{
            pathname: "/home",
            state: {
              area: "Waterloo"
            }
          }}
        >
          <button id="go-home-button">Go to Comments</button>
        </Link>
      </div>
    );
  }
}

export default ChooseLocation;
