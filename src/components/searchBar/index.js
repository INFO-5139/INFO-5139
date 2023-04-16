import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css'


export default function SearchBar() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();


    const shopColl = useSelector((state) => state.shopCollection.shopCollection)


    let items = [];
    const newArray = shopColl.map((item) => {
        items.push(item.name)
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        shopColl.map((item) => {
            if (item.name === term) {
                let path = item.id;
                console.log('path :', path)
                navigate('/product/' + path)
            }
        })
    }



    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className='search-bar'
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    placeholder='Search' />

                <button className='serach-button'>Search</button>
            </form>
            {/* dropdown for the project list */}
            <div className="dropdown">
                {items.filter((item) => {
                    const searchTerm = term.toLowerCase();
                    const title = item.toLowerCase();
                    return searchTerm && title.startsWith(searchTerm);

                })
                    .map((item, i) => (
                        <div key={i}
                            className=''
                            onClick={() => setTerm(item)}

                        >{item}</div>
                    ))}

            </div>

        </div>
    )

}
