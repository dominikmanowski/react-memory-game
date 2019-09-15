import React, { useState, useEffect } from "react";
import { random, shuffle } from "lodash";
import shortid from "shortid";
import "./BoardView.scss";
import CardView from "../components/CardView";
import {
  CARD_COUNT,
  BACKGROUNDS_NR,
  PHOTOS_URL,
  DURATION_OF_REVERSAL
} from "../constants/constants";
import backgrounds from "../constants/backgrounds";

const randomBg = backgrounds[random(BACKGROUNDS_NR)];
const randomCardIds = (cardCount, imgUrls) => {
  let halfArray = shuffle(imgUrls).splice(0, cardCount / 2);
  const doubledArray = halfArray.concat(halfArray);
  return shuffle(doubledArray);
};

const BoardView = ({ getPhotos }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(null);
  const [lastCardFlipped, setLastCardFlipped] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      const photos = await getPhotos(PHOTOS_URL);
      setCards([...randomCardIds(CARD_COUNT, photos)]);
    };
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setIsLoading(false);
    }
  }, [cards]);

  const handleFlippingCard = (cardKey, cardId) => {
    const flipCard = () => {
      setIsFlipped(true);
      setCardFlipped(cardKey);

      setTimeout(() => {
        setIsFlipped(false);
        setCardFlipped(null);
        setLastCardFlipped(cardId);
      }, DURATION_OF_REVERSAL);
    };

    !isFlipped && flipCard();
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        cards.map((cardId, i) => (
          <CardView
            key={shortid.generate()}
            cardKey={i}
            cardId={cardId}
            background={randomBg}
            cardImgUrl={`https://picsum.photos/150?image=${cardId}`}
            handleFlippingCard={handleFlippingCard}
            isFlipped={i === cardFlipped ? isFlipped : null}
          />
        ))
      )}
    </div>
  );
};

export default BoardView;
