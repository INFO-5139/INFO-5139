import React from 'react'

import {
  HomePageContainer,

  HeadingTwo,
  ProductList,

} from './shop-styles'

import ProductItem from '../../components/product-item/product-item.component';
import { useSelector } from 'react-redux';
import ProductFilterSelection from '../../components/product-filter/product-filter.component';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar';

export default function Shop() {
    const themeColor = useSelector((state) => state.theme);
    const shopCollection = useSelector(
      (state) => state.shopCollection.shopCollection
    );
    const [filteredProducts, setFilteredProducts] = useState(shopCollection);
    const selectedTag = useSelector((state) => state.selectedItem.item);
  
    const cartContents = useSelector((state) => state.cart.cartItems);
  
    useEffect(() => {
      if (selectedTag === 'All') {
        setFilteredProducts(shopCollection);
      } else {
        setFilteredProducts(
          shopCollection.filter((product) => product.tags.includes(selectedTag))
        );
      }
    }, [selectedTag, shopCollection, cartContents]);
  return (
    <HomePageContainer products={shopCollection}>
  
 
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <HeadingTwo colors={themeColor}>Our collection</HeadingTwo>
        <SearchBar />
      </div>
      
    
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
  
}
