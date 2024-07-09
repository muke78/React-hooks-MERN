import React from "react";
import ReactDOM from "react-dom/client";
import { CounterAppTemplate } from "./CounterAppTemplate";
import { FirstApp } from "./FirstApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterAppTemplate />
    {/* <FirstApp
      title="Hola, soy Erick"
      subtitle="Hola soy un subtitulo"
    /> */}
  </React.StrictMode>
);
