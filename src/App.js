import React, { Component } from "react";
import Header from "./components/HeaderView";
import BoardView from "./components/BoardView";

const PHOTOS_URL = "https://picsum.photos/list";
class App extends Component {
  state = { photos: [] };

  fetchPhotoList() {
    fetch(PHOTOS_URL)
      .then(resp => resp.json())
      .then(images => images.map(image => image.id))
      .then(images => this.setState({ photos: images }));
  }

  componentDidMount() {
    this.fetchPhotoList();
  }

  render() {
    return (
      <div className="App">
        <Header title="React Memory Game" />
        <BoardView photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
