import React, { Component } from "react";
import styled from "styled-components";

import { amount, randomNr } from "../../helpers";

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 890px;
  margin: 50px auto 0;
`;

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
