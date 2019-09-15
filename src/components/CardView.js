import React from "react";
import PropTypes from "prop-types";
import "./CardView.scss";

const CardView = ({
  background,
  cardImgUrl,
  cardKey,
  cardId,
  handleFlippingCard,
  isFlipped
}) => {
  return (
    <div
      className="game-card"
      onClick={() => handleFlippingCard(cardKey, cardId)}
    >
      <div
        className={`${background} ${isFlipped ? "front-flipped" : ""} front`}
      />
      <div
        className={`${isFlipped ? "back-flipped" : ""} back`}
        style={{ backgroundImage: `url(${cardImgUrl})` }}
      />
    </div>
  );
};

CardView.propTypes = {
  background: PropTypes.string.isRequired,
  cardImgUrl: PropTypes.string.isRequired
};

export default CardView;
