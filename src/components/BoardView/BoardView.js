import React, { Component } from "react";
import _ from "lodash";
import "./BoardView.scss";
import CardView from "../CardView";

const backgrounds = {
  0: "pixel-dots-bg",
  1: "wiggle-bg",
  2: "diagonal-stripes-bg",
  3: "rain-bg",
  4: "zigzag-bg",
  5: "eyes-bg"
};

const randomBg = backgrounds[_.random(0, 5)];

class BorderView extends Component {
  state = {
    cardsAmount: _.range(12)
  };

  render() {
    return (
      <div className="container">
        {this.state.cardsAmount.map(card => (
          <CardView key={card} id={card} bg={randomBg} />
        ))}
      </div>
    );
  }
}

export default BorderView;
