import React, { Component } from "react";
import withToolTip from "./withToolTip";

class Movie extends Component {
  state = {};
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default withToolTip(Movie);
