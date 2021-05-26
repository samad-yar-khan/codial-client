import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {configureStore} from './store/index';

const store = configureStore();

console.log("store",store)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
