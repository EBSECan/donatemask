import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/all.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/css/custom.css";

import Landing from "views/Landing.js";
import Donate from "views/Donate.js";
import Request from "views/Request";
import Store from "views/Store.js";
import Summary from "views/Summary";
import About from "views/About.js";
import FAQ from "views/FAQ.js";
import Privacy from "views/Privacy.js";
import Terms from "views/Terms.js";
import ConfirmRequest from "views/ConfirmRequest.js";

ReactDOM.render(
  <BrowserRouter forceRefresh>
    <Switch>
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Route path="/donate" exact render={(props) => <Donate {...props} />} />
      <Route path="/request" exact render={(props) => <Request {...props} />} />
      // For legacy purposes, support both /buy and /store
      <Route path="/buy" exact render={(props) => <Store {...props} />} />
      <Route path="/store" exact render={(props) => <Store {...props} />} />
      <Route path="/summary" render={(props) => <Summary {...props} />} />
      <Route path="/about" exact render={(props) => <About {...props} />} />
      <Route path="/faq" exact render={(props) => <FAQ {...props} />} />
      <Route path="/privacy" exact render={(props) => <Privacy {...props} />} />
      <Route path="/terms" exact render={(props) => <Terms {...props} />} />
      <Route
        path="/confirmrequest"
        exact
        render={(props) => <ConfirmRequest {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
