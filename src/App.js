import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

const GraphicPage = () => (
  <div>
    <h1>Graphic Page</h1>
  </div>
);

const SpecialProductPage = () => (
  <div>
    <h1>Special Product</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/graphic" component={GraphicPage} />
        <Route path="/special-product" component={SpecialProductPage} />
      </Switch>
    </div>
  );
}

export default App;
