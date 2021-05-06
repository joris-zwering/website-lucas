import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import PortfolioItems from "./pages/portfolio-items";
import HomePage from "./pages/home";
import PortfolioItem from "./pages/portfolio-item";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" /** Home Component */>
            <HomePage></HomePage>
          </Route>
          <Route path="/about" /** About Component */></Route>
          <Route exact path="/portfolio">
            <PortfolioItems></PortfolioItems>
          </Route>
          <Route path="/portfolio/:id">
            <PortfolioItem></PortfolioItem>
          </Route>
          <Route path="/contact" /** Contact portfolio Component */></Route>
        </Switch>
      </Router>
  );
}

export default App;
