import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

import {
    ProductItemTitle,
    ProductItem,
    ProductItemContainer,
    ProductImageContainer,
    ProductPrice,
    ProductDescription
} from './product-detail-page.style';


export default function ItemDetailPage() {
    const params = useParams();
    const item = useSelector((state) => state.frontPageCollection.collection.find((item) => item.id === params.id))

    console.log('item from within itemdetailpage: ', item)


    return (


        <ProductItemContainer>
            <ProductItem>
            <ProductItemTitle>{item.name}</ProductItemTitle>
                <ProductImageContainer>
                    <img
                    src={item.image}
                    alt='cacuts'
                    />
                </ProductImageContainer>
                <ProductPrice>Price: ${item.price}</ProductPrice>
            </ProductItem>
                <ProductDescription>{item.description}</ProductDescription>
        </ProductItemContainer>
    )
}
