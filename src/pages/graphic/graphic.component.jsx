import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
import "./graphic.styles.scss";

const GraphicPage = ({ match }) => {
  // console.log(match.path);
  return (
    <div className="graphic-page">
      <div className="graphic-page__wrapper">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    </div>
  );
};

export default GraphicPage;
