import React from "react";
import { connect } from "react-redux";
import { selectItem, selectSpecial } from "../../redux/shop/shop.selectors";

import "./item.styles.scss";

const ItemPage = ({ item, match }) => {
  console.log(item);

  return <div>item</div>;
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ItemPage);
