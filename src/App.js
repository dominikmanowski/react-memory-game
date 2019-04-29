import React, { Component } from "react";
import Header from "./components/HeaderView";
import BoardView from "./components/BoardView";

class App extends Component {
  getPhotos(url) {
    return fetch(url)
      .then(resp => resp.json())
      .then(images => images.map(image => image.id))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <Header title="React Memory Game" />
        <BoardView getPhotos={this.getPhotos} />
      </div>
    );
  }
}

export default App;
