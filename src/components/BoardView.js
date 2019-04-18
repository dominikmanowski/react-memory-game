import React, { Component } from "react";
import { random, shuffle } from "lodash";
import shortid from "shortid";
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
const PHOTOS_URL = "https://picsum.photos/list";
const randomBg = backgrounds[random(BACKGROUNDS_NR)];
const randomCardIds = (cardCount, imgUrls) => {
  let halfArray = shuffle(imgUrls).splice(0, cardCount / 2);
  const doubledArray = halfArray.concat(halfArray);
  return shuffle(doubledArray);
};

const IMAGE_COUNT = range(85);

const randomCardIds = (cardCount, imgArr = IMAGE_COUNT) => {
  let array = shuffle(imgArr).splice(0, cardCount / 2);

  const doubledArray = array.concat(array);

  return shuffle(doubledArray);
};

class BoardView extends Component {
  state = {
    cards: [],
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const photos = await this.props.getPhotos(PHOTOS_URL);
    this.setState({
      cards: randomCardIds(CARD_COUNT, photos)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.cards !== prevState.cards) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          this.state.cards.map((card, i) => (
            <CardView
              key={shortid.generate()}
              cardKey={i}
              id={card}
              background={randomBg}
              cardImgUrl={`https://picsum.photos/150?image=${card}`}
            />
          ))
        )}
      </div>
    );
  }
}

export default BoardView;
