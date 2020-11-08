import React from "react";
import { connect } from "react-redux";
import { selectItem } from "../../redux/shop/shop.selectors";
import ItemInfo from "../../components/item-info/item-info.component";
import "./item.styles.scss";

const ItemPage = ({ items, match }) => {
  return (
    <div className="item-profile-view">
      {items.items
        .filter((item) => item.linkUrl === match.params.itemId)
        .map((item) => (
          <ItemInfo key={item.id} item={item} />
        ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectItem(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ItemPage);
