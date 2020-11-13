import React from "react";
import CardHeroProduct from "../card-hero-product/card-hero-product.component";
import HomepageCollectionList from "../homepage-collection-list/homepage-collection-list.component";
import HomeParallax from "../home-parallax/home-parallax.component";
import BackgroundVideo from "../background-video/background-video.component";
import Subscribe from "../subscribe/subscribe.component";
import HomeFeatures from "../home-features/home-features.component";
import { connect } from "react-redux";
import {
  selectDirectorySections,
  selectHomepageSections,
  selectParallax,
  selectEmoticonCollections,
  selectMugParallax,
  selectBackgroundVideo,
  selectSubscribe,
  selectFeatures,
} from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

const Directory = ({
  sections,
  homePageSections,
  selectParallax,
  emoticonCollections,
  happyMugParallax,
  backgroundVideo,
  subscribe,
  features,
  match,
}) => (
  <div className="directory">
    <div className="grid-section">
      {sections.map(({ id, ...otherSectionProps }) => (
        <CardHeroProduct key={id} {...otherSectionProps} />
      ))}
    </div>
    <div className="collection-grid">
      {homePageSections.map(({ id, ...otherCollectionProps }) => (
        <HomepageCollectionList
          key={id}
          {...otherCollectionProps}
          match={match}
        />
      ))}
    </div>
    <div>
      {selectParallax.map(({ imageUrl, id }) => (
        <HomeParallax key={id} imageUrl={imageUrl} />
      ))}
    </div>
    <div className="collection-grid">
      {emoticonCollections.map(({ id, ...otherEmotionProps }) => (
        <HomepageCollectionList key={id} {...otherEmotionProps} match={match} />
      ))}
    </div>
    <div>
      {happyMugParallax.map(({ imageUrl, id }) => (
        <HomeParallax key={id} imageUrl={imageUrl} />
      ))}
    </div>
    {backgroundVideo.map(({ id, ...otherVideoProps }) => (
      <BackgroundVideo key={id} {...otherVideoProps} />
    ))}
    <div className="grid-section">
      {subscribe.map(({ id, ...otherSubscribeProps }) => (
        <Subscribe key={id} {...otherSubscribeProps} />
      ))}
    </div>
    <div className="collection-grid">
      {features.map(({ id, icon, title }) => (
        <HomeFeatures key={id} icon={icon} title={title} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  homePageSections: selectHomepageSections,
  selectParallax: selectParallax,
  emoticonCollections: selectEmoticonCollections,
  happyMugParallax: selectMugParallax,
  backgroundVideo: selectBackgroundVideo,
  subscribe: selectSubscribe,
  features: selectFeatures,
});

export default connect(mapStateToProps)(Directory);
