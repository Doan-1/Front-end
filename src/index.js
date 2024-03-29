import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./config/global";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/reset.css";
import "./assets/fonts/FontsFree-Net-Goldman-Bold.ttf";
import "./assets/fonts/FontsFree-Net-Goldman-Regular.ttf";
import "./assets/fonts/TextaPro-Bold.otf";
import "./assets/fonts/TextaPro-Regular.otf";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
