import React, { memo } from "react";
import PropTypes from 'prop-types'
import "./BoardView.scss";
import CardView from "../components/CardView";

const BoardView = ({ isLoading, cards, keys, handleFlippingCard, cardFlipped, cardsGuessed, randomBg }) => {

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          cards.map((cardId, i) => (
            <CardView
              key={keys[i]}
              cardKey={keys[i]}
              cardId={cardId}
              background={randomBg}
              cardImgUrl={`https://picsum.photos/150?image=${cardId}`}
              handleFlippingCard={handleFlippingCard}
              isFlipped={
                cardFlipped === keys[i] || cardsGuessed.includes(keys[i])
              }
            />
          ))
        )}
    </div>
  );
};

BoardView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.number),
  keys: PropTypes.arrayOf(PropTypes.string),
  handleFlippingCard: PropTypes.func.isRequired,
  cardFlipped: PropTypes.number,
  cardsGuessed: PropTypes.arrayOf(PropTypes.string),
  randomBg: PropTypes.oneOf([
    "pixel-dots-bg",
    "wiggle-bg",
    "diagonal-stripes-bg",
    "rain-bg",
    "zigzag-bg",
    "eyes-bg"
  ])
}

export default memo(BoardView);
