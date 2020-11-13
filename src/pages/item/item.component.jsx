import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";
import ItemInfo from "../../components/item-info/item-info.component";
import "./item.styles.scss";

const ItemPage = ({ items, match }) => {
  // console.log(items);
  const { descriptionBottom } = items;

  return (
    <div className="item-profile-view">
      {items.items
        .filter((item) => item.linkUrl === match.params.itemId)
        .map((item) => (
          <ItemInfo
            key={item.id}
            item={item}
            descriptionBottom={descriptionBottom}
            match={match}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(ItemPage);
