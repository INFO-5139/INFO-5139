import React from 'react'
import { useParams } from 'react-router-dom'


export default function ItemDetailPage({ products }) {
    const params = useParams();
    console.log('items from within itemdetailpage: ', products)



    return (
        <div>id: {params.id}</div>
    )
}
