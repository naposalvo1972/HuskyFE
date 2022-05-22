import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css"


import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Alert,
  Spostamenti,
  PressioneBattito,
  Diario,
  Generale,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generale" element={<Generale />} />
       
      <Route path="/spostamenti" element={<Spostamenti />} />
      <Route path="/comesta" element={<PressioneBattito />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/diario" element={<Diario />} />
      
        

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
