import React from "react";
import ProductImage from "../../assets/product-item.png";
import {
  CategoriesContainer,
  ProductItemContainer,
  ProductItemTitle,
  ProductPrice,
  ItemButton,
} from "./product-item.styles";

const ProductItem = () => {
  return (
    <ProductItemContainer>
      <div>
        <img src={ProductImage} alt="Cactus" />
      </div>
      <ProductItemTitle>Smallest Flower</ProductItemTitle>
      <CategoriesContainer>
        <span>Flower</span>
        <span>Small</span>
        <span>Stones</span>
      </CategoriesContainer>
      <ProductPrice>$19.00</ProductPrice>
      <ItemButton>Add to cart</ItemButton>
    </ProductItemContainer>
  );
};

export default ProductItem;
