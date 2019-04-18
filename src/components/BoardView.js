import React, { Component } from "react";
import { random, shuffle, range } from "lodash";
import "./BoardView.scss";
import CardView from "../components/CardView";

const backgrounds = {
  0: "pixel-dots-bg",
  1: "wiggle-bg",
  2: "diagonal-stripes-bg",
  3: "rain-bg",
  4: "zigzag-bg",
  5: "eyes-bg"
};

const CARD_COUNT = 12;
const BACKGROUNDS_NR = 5;

const randomBg = backgrounds[random(BACKGROUNDS_NR)];

const IMAGE_COUNT = range(85);

const randomCardIds = (n, x = IMAGE_COUNT) => {
  let array = Array.from(
    { length: n / 2 },
    () =>
      x
        .splice(random(x.length), 1)
        .reduce((result, next, index) => (result[index] = next)),
    []
  );

  const doubledArray = array.concat(array);

  return shuffle(doubledArray);
};

class BoardView extends Component {
  state = {
    cardCount: randomCardIds(CARD_COUNT)
  };

  render() {
    return (
      <div className="container">
        {this.state.cardCount.map((card, i) => (
          <CardView
            key={i}
            cardKey={i}
            id={card}
            background={randomBg}
            cardImgUrl={`https://picsum.photos/150?image=${card}`}
          />
        ))}
      </div>
    );
  }
}

export default BoardView;
