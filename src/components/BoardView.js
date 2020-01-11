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
  const [keys, setKeys] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(null);
  const [lastCardFlipped, setLastCardFlipped] = useState({});
  const [cardsGuessed, setCardsGuessed] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      const photos = await getPhotos(PHOTOS_URL);
      setCards([...randomCardIds(CARD_COUNT, photos)]);
    };
    fetchPhotos();
  }, [getPhotos]);

  useEffect(() => {
    setKeys([...Array.from({ length: CARD_COUNT }, () => shortid.generate())]);
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setIsLoading(false);
    }
  }, [cards]);

  const pushToGuessedCards = (prevState, key1, key2) =>
    setCardsGuessed([...prevState, key1, key2]);

  const handleFlippingCard = (cardKey, cardId) => {
    const isSameCardTwice = cardKey === lastCardFlipped.key;
    const areCardsGuessed = cardId === lastCardFlipped.id;

    const flipCard = () => {
      setIsFlipped(true);
      setCardFlipped(cardKey);

      if (isSameCardTwice) {
        setTimeout(() => {
          setIsFlipped(false);
          setCardFlipped(null);
        }, DURATION_OF_REVERSAL);
        return;
      }

      if (areCardsGuessed) {
        pushToGuessedCards(cardsGuessed, lastCardFlipped.key, cardKey);
      }

      if (cardId !== lastCardFlipped.id) {
        setTimeout(() => {
          setIsFlipped(false);
          setCardFlipped(null);
          setLastCardFlipped({ id: cardId, key: cardKey });
        }, DURATION_OF_REVERSAL);
        return;
      }

      if (cardId === lastCardFlipped.id) {
        setCardFlipped(lastCardFlipped.key);
        setIsFlipped(false);
        setLastCardFlipped({});
      }
    };

    !isFlipped && !cardsGuessed.includes(cardKey) && flipCard();
  };

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

export default BoardView;
