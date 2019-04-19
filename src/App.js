import React, { Component } from "react";
import Header from "./components/HeaderView";
import BoardView from "./components/BoardView";

class App extends Component {
  state = { photos: [] };

  componentDidMount() {
    fetch("https://picsum.photos/list")
      .then(resp => resp.json())
      .then(images => images.map(image => image.id))
      .then(images => this.setState({ photos: images }));
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
