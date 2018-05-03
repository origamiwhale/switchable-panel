import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";

import NameSurnamePanel from "./components/NameSurnamePanel";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NameSurnamePanel />
        </div>
      </Provider>
    );
  }
}

export default App;
