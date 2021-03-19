import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./modules/App/App";
import * as serviceWorkerRegistration from "./setup/serviceWorkerRegistration";
import { Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <Auth0Provider
    domain="dev-45kbuxp3.us.auth0.com"
    clientId="KBYokR5NYW0COpeCkQBGHXGdKGH3zhqj"
    redirectUri={window.location.origin + "/accounts"}
  >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
