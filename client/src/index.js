import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="steep-shadow-4337.us.auth0.com"
    clientId="oneiH61jwx3tSIzdhoNbrXBMPPFwGnJ1"
    redirectUri={`${window.location.origin}/profile`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
