import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./Navigation";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./stors/storTrailers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
