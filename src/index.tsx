import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./Redux/store";
import { theme } from "./Styles/theme";

const container = document.getElementById("root");
const root = createRoot(container as any);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <App />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
