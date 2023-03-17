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

import { useSelector } from 'react-redux';
const HomePage = () => {

  const  winterCollection  = useSelector((state) => state.frontPageCollection.collection)
  console.log('wintercoloection: ', winterCollection);

  const navigate = useNavigate();

  return (
    <HomePageContainer products={winterCollection}> 
      <FirstScreenContainer>
        <CTAContainer>
          <HeadingOne>
            Faux the real, go for <span>Fauxliage</span>
          </HeadingOne>
          <Paragraph>
            Fake plants that look real. Now time to check new winter
            collection. Say no to allergies and welcome new colours
            into your home.
          </Paragraph>
          <div>
            <PrimaryButton
              onClick={(e) => {
                e.preventDefault();
                navigate('/shop');
              }}
            >
              Shop Now
            </PrimaryButton>
            <SaleButton
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
