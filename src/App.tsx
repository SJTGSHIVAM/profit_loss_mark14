import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

import NotFound from "./components/notfound";
import ProfitCalc from "./components/ProfitCalc";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={ProfitCalc} exact />
        <Route path="/about" exact component={About} />
        <Route path="/" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
