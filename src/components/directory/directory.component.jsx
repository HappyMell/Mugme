import React from "react";
import CardHeroProduct from "../card-hero-product/card-hero-product.component";
import HomepageCollectionList from "../homepage-collection-list/homepage-collection-list.component";
import HomeParallax from "../home-parallax/home-parallax.component";
import BackgroundVideo from "../background-video/background-video.component";
import Subscribe from "../subscribe/subscribe.component";
import TeaCupAnimation from "../../animations/tea-cup.component";
import BellAnimation from "../../animations/bell-animation.component";
import BasketAnimation from "../../animations/basket.component";
import HomeFeatures from "../home-features/home-features.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "me&you",
          id: 1,
          backgroundColor: "#ff6464",
        },
        {
          imageUrl:
            "https://uploads-ssl.webflow.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd46a6f81b40e_heroimage.jpg",
          id: 2,
        },
      ],
      homePageCollections: [
        {
          id: 1,
          title: "Pattern Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd470a581b4b8_mockup7-p-800.jpeg",
          options: ["model", "40cl", "36cl"],
          linkUrl: "shop",
        },
        {
          id: 2,
          title: "Black & White Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4358281b4b9_mockup8-p-800.jpeg",
          options: ["model", "40cl", "36cl"],
          linkUrl: "shop",
        },
        {
          id: 3,
          title: "Art Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4fff281b4ba_mockup9-p-800.jpeg",
          options: ["model", "40cl", "36cl"],
          linkUrl: "shop",
        },
      ],
      homepageParallax: [
        {
          id: 1,
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd482bc81b3ed_parallax1.jpg",
        },
      ],
      emotionCollections: [
        {
          id: 1,
          title: "Happy Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4d65781b4b4_mockup1-p-800.jpeg",
          options: ["model", "40cl"],
          linkUrl: "shop",
        },
        {
          id: 2,
          title: "X Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4e25281b4b5_mockup2-p-800.jpeg",
          options: ["model", "40cl"],
          linkUrl: "shop",
        },
        {
          id: 3,
          title: "Tired Mug",
          price: "20.00",
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd457f481b4b6_mockup3-p-800.jpeg",
          options: ["model", "40cl"],
          linkUrl: "shop",
        },
      ],
      happyMugParallax: [
        {
          id: 1,
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd43eed81b420_parallax2.jpg",
        },
      ],
      backgroundVideo: [
        {
          id: 1,
          title: "Design your mug",
          linkUrl: "design",
          videoUrl:
            "https://assets.website-files.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd4cb5681b41f_ezgif-com-resize-transcode.mp4",
        },
      ],

      subscribe: [
        {
          id: 1,
          imageUrl:
            "https://assets.website-files.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd4c68481b421_homepageblock1.jpg",
        },
        {
          id: 2,
          title: "ready?",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          backgroundColor: "#303030",
        },
      ],

      features: [
        {
          id: 1,
          icon: <TeaCupAnimation />,
          title: "Customize your mug",
        },
        {
          id: 2,
          icon: <BellAnimation />,
          title: "Live notification",
        },
        {
          id: 3,
          icon: <BasketAnimation />,
          title: "Easy shopping",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        <div className="grid-section">
          {this.state.sections.map(
            ({ title, id, backgroundColor, imageUrl }) => (
              <CardHeroProduct
                key={id}
                title={title}
                backgroundColor={backgroundColor}
                imageUrl={imageUrl}
              />
            )
          )}
        </div>
        <div className="collection-grid">
          {this.state.homePageCollections.map(
            ({ title, price, imageUrl, options, id }) => (
              <HomepageCollectionList
                key={id}
                title={title}
                price={price}
                imageUrl={imageUrl}
                options={options}
              />
            )
          )}
        </div>
        {this.state.homepageParallax.map(({ imageUrl, id }) => (
          <HomeParallax key={id} imageUrl={imageUrl} />
        ))}
        <div className="collection-grid">
          {this.state.emotionCollections.map(
            ({ title, price, imageUrl, options, id }) => (
              <HomepageCollectionList
                key={id}
                title={title}
                price={price}
                imageUrl={imageUrl}
                options={options}
              />
            )
          )}
        </div>
        <div>
          {this.state.happyMugParallax.map(({ imageUrl, id }) => (
            <HomeParallax key={id} imageUrl={imageUrl} />
          ))}
        </div>
        {this.state.backgroundVideo.map(({ id, title, linkUrl, videoUrl }) => (
          <BackgroundVideo
            key={id}
            title={title}
            linkUrl={linkUrl}
            videoUrl={videoUrl}
          />
        ))}
        <div className="grid-section">
          {this.state.subscribe.map(
            ({ id, imageUrl, title, subtitle, backgroundColor }) => (
              <Subscribe
                id={id}
                key={id}
                imageUrl={imageUrl}
                title={title}
                subtitle={subtitle}
                backgroundColor={backgroundColor}
              />
            )
          )}
        </div>
        <div className="collection-grid">
          {this.state.features.map(({ id, icon, title }) => (
            <HomeFeatures key={id} icon={icon} title={title} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
