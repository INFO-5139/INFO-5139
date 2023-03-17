import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function ItemDetailPage() {
    const params = useParams();
    const item = useSelector((state) => state.frontPageCollection.collection.find((item) => item.id === params.id))

    console.log('item from within itemdetailpage: ', item)


    return (
        <>
            <div>id: {params.id}</div>
            <div>{item.image}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>


        </>
    )
}
