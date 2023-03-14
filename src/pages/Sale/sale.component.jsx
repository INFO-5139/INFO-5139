import React, { useState } from "react";
import ProductItem from "../../components/product-item/product-item.component";
import { HeadingTwo, ProductList } from "../HomePage/home-page.styles";
import { SalePageContainer } from "./sale.styles";
import ProductImage from "../../assets/product-item.png";
import { nanoid } from "nanoid";

const SalePage = () => {
  const [itemsOnSale, setItemsOnSale] = useState([
    {
      id: nanoid(),
      name: "Cactus",
      isOnSale: true,
      oldPrice: 19,
      price: 8,
      tags: ["Waterless", "Small"],
      image: ProductImage,
    },
    {
      id: nanoid(),
      name: "Oak",
      isOnSale: true,
      oldPrice: 25,
      price: 15,
      tags: ["Tree", "Leafes", "Wood"],
      image: ProductImage,
    },
  ]);
  return (
    <SalePageContainer>
      <HeadingTwo>THESE ITEMS ARE ON SALE!</HeadingTwo>
      <ProductList>
        {itemsOnSale.map((item) => (
          <ProductItem item={item} />
        ))}
      </ProductList>
    </SalePageContainer>
  );
};

export default SalePage;
