/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/css/custom.css"

import Index from "views/Index.js";
import Landing from "views/Landing.js";

import Donate from "views/Donate.js";
import Request from "views/Request";
import Summary from "views/Summary.js";
import About from "views/About.js";
import FAQ from "views/FAQ.js";
import Privacy from "views/Privacy.js"
import Terms from 'views/Terms.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route
        path="/donate"
        exact
        render={props => <Donate {...props} />}
      />
      <Route
        path="/request"
        exact
        render={props => <Request {...props} />}
      />
      <Route
        path="/summary"
        render={props => <Summary {...props} />}
      />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/faq"
        exact
        render={props => <FAQ {...props} />}
      />
      <Route
        path="/privacy"
        exact
        render={props => <Privacy {...props} />}
      />
      <Route
        path="/terms"
        exact
        render={props => <Terms {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
