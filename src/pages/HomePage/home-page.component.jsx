/** @format */

import React, { useState } from 'react';
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
  SaleButton,
} from './home-page.styles';
import Image from '../../assets/main_image.jpg';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../components/product-item/product-item.component';
import ProductImage from '../../assets/product-item.png';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const themeColor = useSelector((state) => state.theme);
  const [winterCollection, setWinterCollection] = useState([
    {
      id: nanoid(),
      name: 'Smallest Flower',
      isOnSale: false,
      price: 19,
      tags: ['Flower', 'Small', 'Stone'],
      image: ProductImage,
      quantity: 13,
    },
    {
      id: nanoid(),
      name: 'Big Pine Tree',
      isOnSale: false,
      price: 25,
      tags: ['Tree', 'Pine', 'Wood'],
      image: ProductImage,
      quantity: 5,
    },
    {
      id: nanoid(),
      name: 'Cactus',
      isOnSale: false,
      price: 10,
      tags: ['Cactus', 'Stone'],
      image: ProductImage,
      quantity: 22,
    },
    {
      id: nanoid(),
      name: 'Christmas Tree',
      isOnSale: false,
      price: 39,
      tags: ['Tree', 'Christmas'],
      image: ProductImage,
      quantity: 2,
    },
  ]);

  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <FirstScreenContainer>
        <CTAContainer>
          <HeadingOne colors={themeColor}>
            Faux the real, go for <span>Fauxliage</span>
          </HeadingOne>
          <Paragraph>
            Fake plants that look real. Now time to check new winter collection.
            Say no to allergies and welcome new colours into your home.
          </Paragraph>
          <div>
            <PrimaryButton
              colors={themeColor}
              onClick={(e) => {
                e.preventDefault();
                navigate('/shop');
              }}
            >
              Shop Now
            </PrimaryButton>
            <SaleButton
              colors={themeColor}
              onClick={(e) => {
                e.preventDefault();
                navigate('/sale');
              }}
            >
              On Sale Now
            </SaleButton>
          </div>
        </CTAContainer>
        <ImageContainer>
          <CTAImage
            src={Image}
            alt='Flower Bucket'
          />
        </ImageContainer>
      </FirstScreenContainer>
      <HeadingTwo>Our winter collection</HeadingTwo>
      <ProductList>
        {winterCollection.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
          />
        ))}
      </ProductList>
    </HomePageContainer>
  );
};

export default HomePage;
