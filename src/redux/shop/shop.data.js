const SHOP_DATA = [
  {
    id: 1,
    title: "Graphic",
    routeName: "graphic",
    items: [
      {
        id: 1,
        name: "Pattern Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd470a581b4b8_mockup7-p-800.jpeg",
        linkUrl: "pattern-mug",
        category: "product",
        options: ["model", "40cl", "36cl"],
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 2,
        name: "Black & White Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4358281b4b9_mockup8-p-800.jpeg",
        linkUrl: "black-and-white-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 3,
        name: "Art Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4fff281b4ba_mockup9-p-800.jpeg",
        linkUrl: "art-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 4,
        name: "Monocolor Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4be2181b4bb_mockup10-p-800.jpeg",
        linkUrl: "monocolor-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 5,
        name: "Big Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4b1dd81b4bc_mockup11-p-800.jpeg",
        linkUrl: "big-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 6,
        name: "Handmade Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4456c81b4bd_mockup12-p-800.jpeg",
        linkUrl: "handmade-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
    ],
  },
  {
    id: 2,
    title: "Emoticon",
    routeName: "emoticon",
    items: [
      {
        id: 1,
        name: "Happy Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4d65781b4b4_mockup1-p-800.jpeg",
        linkUrl: "happy-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 2,
        name: "X Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4e25281b4b5_mockup2-p-800.jpeg",
        linkUrl: "x-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 3,
        name: "Tired Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd457f481b4b6_mockup3-p-800.jpeg",
        linkUrl: "tired-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 4,
        name: "Stay Safe Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd41c5281b4b7_mockup4-p-800.jpeg",
        linkUrl: "stay-safe-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 5,
        name: "Super Happy Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4934281b4bf_mockup5-p-800.jpeg",
        linkUrl: "super-happy-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
      {
        id: 6,
        name: "Teeth Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd42a9d81b4be_mockup6-p-800.jpeg",
        linkUrl: "teeth-mug",
        options: ["model", "40cl", "36cl"],
        category: "product",
        price: 20,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
      },
    ],
  },
  {
    id: 3,
    title: "Special Product",
    routeName: "special-product",
    items: [
      {
        id: 1,
        name: "Special Mug",
        imageUrl:
          "https://assets.website-files.com/5f355e6ddb2cd4759981b3ce/5f355e6ddb2cd4916d81b4a5_special.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ex id ornare iaculis. Nulla facilisi. Sed luctus suscipit iaculis. Maecenas eleifend, enim in congue accumsan, velit risus accumsan felis, eget tincidunt sapien nunc a ligula. Vivamus vel fermentum dolor. Mauris nec convallis erat. Nam vestibulum quam a lorem ullamcorper, scelerisque imperdiet nulla tincidunt. Fusce nibh arcu, dapibus ac ultricies nec, pretium et quam. Nam ut eros non orci egestas fermentum.",
        price: 30,
      },
    ],
  },
];

export default SHOP_DATA;
