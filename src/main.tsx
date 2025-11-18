import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store.tsx";

import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import StyleWrapper from "./components/StyleWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleWrapper>
          <Navbar />
          <App />
        </StyleWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
