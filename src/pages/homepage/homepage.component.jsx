import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = ({ match }) => (
  <div className="homepage">
    <Directory match={match} />
  </div>
);

export default HomePage;
