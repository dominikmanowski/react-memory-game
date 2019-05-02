import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CardView.scss";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };

    this.handleFlippingCard = this.handleFlippingCard.bind(this);
  }

  handleFlippingCard() {
    const DURATION_OF_REVERSAL = 3000;
    const changeState = () => {
      this.setState(prevState => ({
        ...prevState,
        isFlipped: !prevState.isFlipped
      }));
    };

    !this.state.isFlipped && changeState();

    !this.state.isFlipped &&
      setTimeout(() => {
        changeState();
      }, DURATION_OF_REVERSAL);
  }

  render() {
    return (
      <div className="game-card" onClick={this.handleFlippingCard}>
        <div
          className={`${this.props.background} ${
            this.state.isFlipped ? "front-flipped" : ""
          } front`}
        />
        <div
          className={`${this.state.isFlipped ? "back-flipped" : ""} back`}
          style={{ backgroundImage: `url(${this.props.cardImgUrl})` }}
        />
      </div>
    );
  }
}

CardView.propTypes = {
  background: PropTypes.string.isRequired,
  cardImgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CardView;
