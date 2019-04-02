import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  perspective: 1500px;
  position: relative;
  height: 150px;
  width: 150px;
  margin: 15px;

  .front,
  .back {
    height: 150px;
    position: absolute;
    transition: all 0.8s ease;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  .front-flipped {
    transform: rotateY(-180deg);
  }

  .back {
    transform: rotateY(180deg);
    background-color: darkturquoise;

    &-flipped {
      transform: rotateY(0);
    }
  }
`;

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

    changeState();

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
