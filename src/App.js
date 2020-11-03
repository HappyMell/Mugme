import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import GraphicShop from "./pages/graphic/graphic.component";
import SpecialProduct from "./pages/special-product/special-product.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/category" component={GraphicShop} />
        <Route path="/special" component={SpecialProduct} />
      </Switch>
    </div>
  );
}

export default App;
