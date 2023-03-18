import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  ProductItemTitle,
  ProductItem,
  ProductItemContainer,
  ProductImageContainer,
  ProductPrice,
  ProductDescription,
  SalesPrice,
} from './product-detail-page.style';

export default function ItemDetailPage() {
    let item;
  const params = useParams();
  const themeColor = useSelector((state) => state.theme);
  
  const collectionItem = useSelector((state) =>
    state.frontPageCollection.collection.find(
      (item) => item.id === params.id));

    const salesItem = useSelector((state) => 
    state.salesCollection.salesCollection.find(
        (item) => item.id === params.id));

 if (collectionItem  && !salesItem) {
    item = collectionItem
 } else if(!collectionItem && salesItem) {
    item = salesItem
 }

 console.log('here is the item from productDetialPage: ', item)

  return (
    
    <ProductItemContainer>
      <ProductItem>
        <ProductItemTitle colors={themeColor}>
          {item.name}
        </ProductItemTitle>
        <ProductImageContainer>
          <img
            src={item.image}
            alt='cacuts'
          />
        </ProductImageContainer>
        {collectionItem &&
        <ProductPrice colors={themeColor}>
          Price: ${item.price.toFixed(2)}
        </ProductPrice>
        }
        {salesItem && (
        <>
         <ProductPrice colors={themeColor}>
         Regular Price: ${item.price.toFixed(2)}
       </ProductPrice>
        
        <SalesPrice colors={themeColor}>
          Sales Price: ${item.salesPrice.toFixed(2)}
        </SalesPrice>
        </> )}

      </ProductItem>
      <ProductDescription colors={themeColor}>
        {item.description}
      </ProductDescription>
    </ProductItemContainer>
  );
}
