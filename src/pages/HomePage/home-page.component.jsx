import React from 'react';
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
import ProductFilterSelection from '../../components/product-filter/product-filter.component';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const themeColor = useSelector((state) => state.theme);
  const winterCollection = useSelector(
    (state) => state.frontPageCollection.collection
  );
  const [filteredProducts, setFilteredProducts] = useState(winterCollection);
  const selectedTag = useSelector((state) => state.selectedItem.item);
  const navigate = useNavigate();
  const cartContents = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredProducts(winterCollection);
    } else {
      setFilteredProducts(
        winterCollection.filter((product) => product.tags.includes(selectedTag))
      );
    }
  }, [selectedTag, winterCollection, cartContents]);

  return (
    <HomePageContainer products={winterCollection}>
      <FirstScreenContainer>
        <CTAContainer>
          <HeadingOne colors={themeColor}>
            Faux the real, go for <span>Fauxliage</span>
          </HeadingOne>
          <Paragraph colors={themeColor}>
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
      <HeadingTwo colors={themeColor}>Our winter collection</HeadingTwo>
      <ProductFilterSelection />
      <ProductList colors={themeColor}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </ProductList>
    </HomePageContainer>
  );
};

export default HomePage;
