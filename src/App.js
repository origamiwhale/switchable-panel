import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";

import Panel from "./components/Panel";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Panel />
        </div>
      </Provider>
    );
  }
}

export default App;
