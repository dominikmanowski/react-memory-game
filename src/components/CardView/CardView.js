import React, { Component } from "react";

import { Card } from "./CardView.styled";

class CardView extends Component {
  state = {
    isFlipped: false,
    isGuessed: false
  };

  handleFlippingCard = () => {
    const changeState = () => {
      this.setState({
        ...this.state,
        isFlipped: !this.state.isFlipped
      });
    };

    !this.state.isFlipped && changeState();

    !this.state.isFlipped &&
      setTimeout(() => {
        changeState();
      }, 1500);
  };

  render() {
    return (
      <Card onClick={this.handleFlippingCard}>
        <div
          className={`${this.props.bg} ${
            this.state.isFlipped ? "front-flipped" : ""
          } front`}
        />
        <div className={`${this.state.isFlipped ? "back-flipped" : ""} back`} />
      </Card>
    );
  }
}

export default CardView;
