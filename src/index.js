import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { CacheProvider } from "@emotion/react";
import "./assets/Css/scrollbarStyle.css";
import createCache from "@emotion/cache";
const cache = createCache({
  key: "css",
  prepend: true,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <div className="scrollable-content">
        <App />
      </div>
    </CacheProvider>
  </React.StrictMode>
);
