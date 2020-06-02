import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selButtonIdx: "1",
    };
  }

  handleButtonSelection = (circle) => {
    this.setState({
      selButtonIdx: circle,
    });
    console.log(circle);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Unit 4 Final Assessment</header>
        <main>
          <CircleSelector
            selButtonIdx={this.state.selButtonIdx}
            handleButtonSelection={this.handleButtonSelection}
          />
          <Circles selButtonIdx={this.state.selButtonIdx} />
        </main>
      </div>
    );
  }
}

export default App;
