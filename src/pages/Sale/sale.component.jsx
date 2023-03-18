import React, { useState } from 'react';
import ProductItem from '../../components/product-item/product-item.component';
// import { HeadingTwo, ProductList } from '../HomePage/home-page.styles';
import { SalePageContainer, HeadingTwo, ProductList } from './sale.styles';
import { useSelector } from 'react-redux';

const SalePage = () => {
  const themeColor = useSelector((state) => state.theme);
  const itemsOnSale = useSelector((state) => state.salesCollection.salesCollection);

  // const [itemsOnSale, setItemsOnSale] = useState([
  //   {
  //     id: nanoid(),
  //     name: 'Cactus',
  //     isOnSale: true,
  //     oldPrice: 19,
  //     price: 8,
  //     tags: ['Waterless', 'Small'],
  //     image: ProductImage,
  //     quantity: 22,
  //   },
  //   {
  //     id: nanoid(),
  //     name: 'Oak',
  //     isOnSale: true,
  //     oldPrice: 25,
  //     price: 15,
  //     tags: ['Tree', 'Leafes', 'Wood'],
  //     image: ProductImage,
  //     quantity: 3,
  //   },
  // ]);
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
