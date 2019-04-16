import React, { Component } from "react";
import { random } from "lodash";
import randomCardsIds from "../randomCardsIds";
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

class BoardView extends Component {
  state = {
    cardCount: randomCardsIds(CARD_COUNT)
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
            backgroundReverse={`https://picsum.photos/150?image=${card}`}
          />
        ))}
      </div>
    );
  }
}

export default BoardView;
