import React from "react";
import Header from "./components/HeaderView";
import BoardContainer from './containers/BoardContainer'
const App = () => {
  return (
    <div className="App">
      <Header title="React Memory Game" />
      <BoardContainer />
    </div>
  );
}
export default App;
