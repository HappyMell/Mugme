import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
import ItemPage from "../item/item.component";
import "./graphic.styles.scss";

const GraphicPage = ({ match }) => {
  return (
    <div className="graphic-page">
      <div className="graphic-page__wrapper">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CategoryPage}
        />
        <Route
          path={`${match.path}/:categoryId/:itemId`}
          component={ItemPage}
        />
      </div>
    </div>
  );
};

export default GraphicPage;
