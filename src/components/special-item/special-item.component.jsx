import React from "react";
import { selectSpecial } from "../../redux/shop/shop.selectors";
import SpecialItemView from "../special-item-view/special-item-view.component";
import SpecialOverflow from "../special-overflow/special-overflow.component";
import Slider from "../slider/slider.component";
import ColorGallery from "../color-gallery/color-gallery.component";
import { connect } from "react-redux";
import "./special-item.styles.scss";

const SpecialItem = ({ collection }) => {
  const { headerTitle, items, image, overflows, sliders, gallery } = collection;
  console.log(collection);

  return (
    <div className="product-container">
      <div className="hero-wrapper">
        <h1
          className="hero-wrapper__header"
          style={{ backgroundImage: `url(${image})` }}
        >
          {headerTitle}
        </h1>
        <div className="tags-wrapper">
          <p className="label">LIMITED EDITION</p>
          <p className="second">UNTIL DECEMBER 2021</p>
        </div>
      </div>
      <div className="special-item-wrapper">
        {items.map((item, id) => (
          <SpecialItemView key={id} item={item} />
        ))}
      </div>
      {overflows.map((overflow, id) => (
        <SpecialOverflow key={id} overflow={overflow} />
      ))}
      {sliders.map((slider, id) => (
        <Slider key={id} slider={slider} />
      ))}
      <div className="gallery-special">
        <div className="grid-colors">
          {gallery.map((gallery, id) => (
            <ColorGallery key={id} gallery={gallery} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectSpecial(ownProps.match.path)(state),
});

export default connect(mapStateToProps)(SpecialItem);
