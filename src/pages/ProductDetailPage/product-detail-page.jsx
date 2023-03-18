import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  ProductItemTitle,
  ProductItem,
  ProductItemContainer,
  ProductImageContainer,
  ProductPrice,
  ProductDescription,
} from './product-detail-page.style';

export default function ItemDetailPage() {
  const params = useParams();
  const themeColor = useSelector((state) => state.theme);
  const item = useSelector((state) =>
    state.frontPageCollection.collection.find(
      (item) => item.id === params.id
    )
  );

  console.log('item from within itemdetailpage: ', item);

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
        <ProductPrice colors={themeColor}>
          Price: ${item.price.toFixed(2)}
        </ProductPrice>
      </ProductItem>
      <ProductDescription colors={themeColor}>
        {item.description}
      </ProductDescription>
    </ProductItemContainer>
  );
}
