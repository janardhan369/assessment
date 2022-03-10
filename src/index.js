import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  rootElement
);
