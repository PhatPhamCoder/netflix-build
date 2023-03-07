import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Footer from "./Footer";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
);
