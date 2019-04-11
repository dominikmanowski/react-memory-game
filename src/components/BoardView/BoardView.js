import React, { Component } from "react";

import { amount, randomNr } from "../../helpers";
import { Container } from "./BoardView.styled";

import CardView from "../CardView";

const backgrounds = {
  0: "pixel-dots-bg",
  1: "wiggle-bg",
  2: "diagonal-stripes-bg",
  3: "rain-bg",
  4: "zigzag-bg",
  5: "eyes-bg"
};

const randomBg = backgrounds[randomNr(0, 5)];

class BorderView extends Component {
  state = {
    cardsAmount: amount(12)
  };

  render() {
    return (
      <Container>
        {this.state.cardsAmount.map(card => (
          <CardView key={card} id={card} bg={randomBg} />
        ))}
      </Container>
    );
  }
}

export default BorderView;
