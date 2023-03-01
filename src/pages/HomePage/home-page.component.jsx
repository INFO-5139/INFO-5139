import React, { useState } from "react";
import {
  HomePageContainer,
  HeadingOne,
  Paragraph,
  CTAContainer,
  PrimaryButton,
  FirstScreenContainer,
  CTAImage,
  ImageContainer,
  HeadingTwo,
  ProductList,
} from "./home-page.styles";
import Image from "../../assets/main_image.jpg";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../components/product-item/product-item.component";
import ProductImage from "../../assets/product-item.png";
import { nanoid } from "nanoid";

const HomePage = () => {
  const [winterCollection, setWinterCollection] = useState([
    {
      id: nanoid(),
      name: "Smallest Flower",
      price: 19,
      tags: ["Flower", "Small", "Stone"],
      image: ProductImage,
    },
    {
      id: nanoid(),
      name: "Big Pine Tree",
      price: 25,
      tags: ["Tree", "Pine", "Wood"],
      image: ProductImage,
    },
    {
      id: nanoid(),
      name: "Cactus",
      price: 10,
      tags: ["Cactus", "Stone"],
      image: ProductImage,
    },
    {
      id: nanoid(),
      name: "Christmas Tree",
      price: 39,
      tags: ["Tree", "Christmas"],
      image: ProductImage,
    },
  ]);

  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <FirstScreenContainer>
        <CTAContainer>
          <HeadingOne>
            Faux the real, go for <span>Fauxliage</span>
          </HeadingOne>
          <Paragraph>
            Fake plants that look real. Now time to check new winter collection.
            Say no to allergies and welcome new colours into your home.
          </Paragraph>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              navigate("/shop");
            }}
          >
            Shop Now
          </PrimaryButton>
        </CTAContainer>
        <ImageContainer>
          <CTAImage src={Image} alt="Flower Bucket" />
        </ImageContainer>
      </FirstScreenContainer>
      <HeadingTwo>Our winter collection</HeadingTwo>
      <ProductList>
        {winterCollection.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ProductList>
    </HomePageContainer>
  );
};

export default HomePage;
