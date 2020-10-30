import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";
import "./category.styles.scss";

const CategoryPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="category">
      <div className="hero-wrapper">
        <h2 className="title">{title}</h2>
        <div className="filter" />
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
