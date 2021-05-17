import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-i0x6xv7c.us.auth0.com"
    clientId="pnyIL5ruCA48CuL0ttwoqhAcFuzPBzDj"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);