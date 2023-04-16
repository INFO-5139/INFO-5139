import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ItemRating from "../../components/itemRating/ItemRating.js";
import RateThisItem from "../../components/itemRating/RateThisItem.js";

import {
  ProductItemTitle,
  ProductItemOverview,
  ProductItemContainer,
  ProductImageContainer,
  ProductPrice,
  ProductDescription,
  SalesPrice,
  RatingContainer,
} from "./product-detail-page.style";
import { ProductList } from "../HomePage/home-page.styles.jsx";
import ProductItem from "../../components/product-item/product-item.component.jsx";

export default function ItemDetailPage() {
  let item;
  const params = useParams();
  const themeColor = useSelector((state) => state.theme);
  const alsoBuyItemsCollection = useSelector(
    (state) => state.frontPageCollection.collection
  );
const shopCollection = useSelector((state) => state.shopCollection.shopCollection.find((item) => item.id === params.id))
  const collectionItem = useSelector((state) =>
    state.frontPageCollection.collection.find((item) => item.id === params.id)
  );

  const salesItem = useSelector((state) =>
    state.salesCollection.salesCollection.find((item) => item.id === params.id)
  );

  if (collectionItem && !salesItem) {
    item = collectionItem;
  } else if (!collectionItem && salesItem) {
    item = salesItem;
  }

  if (shopCollection) {
    item = shopCollection;
  }

  console.log("here is the item from productDetialPage: ", item);
  console.log("THIS IS ALSO BUY", alsoBuyItemsCollection);

  return (
    <>
      <ProductItemContainer>
        <ProductItemOverview>
          <ProductItemTitle colors={themeColor}>{item.name}</ProductItemTitle>
          <ProductImageContainer>
            <img src={item.image} alt="cacuts" />
          </ProductImageContainer>
          {collectionItem && (
            <ProductPrice colors={themeColor}>
              Price: ${item.price.toFixed(2)}
            </ProductPrice>
          )}
          {salesItem && (
            <>
              <ProductPrice colors={themeColor}>
                Regular Price: ${item.price.toFixed(2)}
              </ProductPrice>

              <SalesPrice colors={themeColor}>
                Sales Price: ${item.salesPrice.toFixed(2)}
              </SalesPrice>
            </>
          )}

          <RatingContainer>
            <ItemRating
              generalRating={item.generalRating}
              title={"Rating:"}
            ></ItemRating>
            <RateThisItem id={item.id}></RateThisItem>
          </RatingContainer>
        </ProductItemOverview>
        <ProductDescription colors={themeColor}>
          {item.description}
        </ProductDescription>
      </ProductItemContainer>

      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 20 }}>People also purchase</h2>
        <ProductList>
          {alsoBuyItemsCollection.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ProductList>
      </div>
    </>
  );
}
