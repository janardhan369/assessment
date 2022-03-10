import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import Registration from "./components/Registration";
import "./styles.css";

const routes = (
  <BrowserRouter>
    <Route exact path="/" component={Registration} />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routes, rootElement);
