import React from "react";
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
} from "./home-page.styles";
import Image from "../../assets/main_image.jpg";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../components/product-item/product-item.component";

const HomePage = () => {
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
      <ProductItem />
    </HomePageContainer>
  );
};

export default HomePage;
