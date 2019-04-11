import React, { Component } from "react";
import Header from "./components/HeaderView";

import BoardView from "./components/BoardView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Memory Game" />
        <BoardView />
      </div>
    );
  }
}

export default App;
