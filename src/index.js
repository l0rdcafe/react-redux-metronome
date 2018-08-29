import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import "./index.css";
import reducer from "./reducers";
import Metronome from "./components/metronome/metronome";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Metronome />
  </Provider>,
  document.getElementById("root")
);
