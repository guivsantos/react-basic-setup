import React, { Component, Fragment } from "react";
import { render } from "react-dom";
class App extends Component {
  state = {
    counter: 0
  };

  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}

render(<App />, document.getElementById("app"));
