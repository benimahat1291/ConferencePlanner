import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="plain-mode-2302.us.auth0.com"
    clientId="tCyhFrQCjzicfXDzy4YqPucZ7tFE1jeR"
    redirectUri={`${window.location.origin}/profile`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
