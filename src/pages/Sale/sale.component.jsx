import React, { useState } from 'react';
import ProductItem from '../../components/product-item/product-item.component';
// import { HeadingTwo, ProductList } from '../HomePage/home-page.styles';
import { SalePageContainer, HeadingTwo, ProductList } from './sale.styles';
import { useSelector } from 'react-redux';

const SalePage = () => {
  const themeColor = useSelector((state) => state.theme);
  const itemsOnSale = useSelector((state) => state.salesCollection.salesCollection);

 
  return (
    <SalePageContainer>
      <HeadingTwo colors={themeColor}>THESE ITEMS ARE ON SALE!</HeadingTwo>
      <ProductList>
        {itemsOnSale.map((item, index) => (
          <ProductItem
            key={index}
            item={item}
          />
        ))}
      </ProductList>
    </SalePageContainer>
  );
};

export default SalePage;
