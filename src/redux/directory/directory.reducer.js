import TeaCupAnimation from "../../animations/tea-cup.component";
import BellAnimation from "../../animations/bell-animation.component";
import BasketAnimation from "../../animations/basket.component";

const INITIAL_STATE = {
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
      linkUrl: "category/graphic/pattern-mug",
    },
    {
      id: 2,
      title: "Black & White Mug",
      price: "20.00",
      imageUrl:
        "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4358281b4b9_mockup8-p-800.jpeg",
      options: ["model", "40cl", "36cl"],
      linkUrl: "category/graphic/black-and-white-mug",
    },
    {
      id: 3,
      title: "Art Mug",
      price: "20.00",
      imageUrl:
        "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4fff281b4ba_mockup9-p-800.jpeg",
      options: ["model", "40cl", "36cl"],
      linkUrl: "category/graphic/art-mug",
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
      linkUrl: "category/emoticon/happy-mug",
    },
    {
      id: 2,
      title: "X Mug",
      price: "20.00",
      imageUrl:
        "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4e25281b4b5_mockup2-p-800.jpeg",
      options: ["model", "40cl"],
      linkUrl: "category/emoticon/x-mug",
    },
    {
      id: 3,
      title: "Tired Mug",
      price: "20.00",
      imageUrl:
        "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd457f481b4b6_mockup3-p-800.jpeg",
      options: ["model", "40cl"],
      linkUrl: "category/emoticon/tired-mug",
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
      linkUrl: "special",
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
