import React from "react";
import ProductImage from "../../assets/product-item.png";
import {
  CategoriesContainer,
  ProductItemContainer,
  ProductItemTitle,
  ProductPrice,
  ItemButton,
  ProductImageContainer,
} from "./product-item.styles";

const ProductItem = ({ item }) => {
  return (
    <ProductItemContainer>
      <ProductImageContainer>
        <img src={item.image} alt="Cactus" />
      </ProductImageContainer>
      <ProductItemTitle>{item.name}</ProductItemTitle>
      <CategoriesContainer>
        {item.tags.map((t) => (
          <span>{t}</span>
        ))}
      </CategoriesContainer>
      <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
      <ItemButton>Add to cart</ItemButton>
    </ProductItemContainer>
  );
};

export default ProductItem;
