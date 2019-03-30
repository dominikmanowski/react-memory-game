import React, { Component } from "react";
import styled from "styled-components";

import CardView from "../CardView";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 890px;
  margin: 50px auto 0;
`;

const amount = length => Array.from({ length }, (_, i) => i);

class BorderView extends Component {
  state = {
    cardsAmount: amount(12)
  };

  render() {
    return (
      <Container>
        {this.state.cardsAmount.map(card => (
          <CardView key={card} id={card} />
        ))}
      </Container>
    );
  }
}

export default BorderView;
