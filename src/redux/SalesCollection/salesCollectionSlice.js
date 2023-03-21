import { createSlice } from "@reduxjs/toolkit";
import ProductImage from '../../assets/product-item.png';
import { nanoid } from 'nanoid';

const salesCollection = [
    {
        id: nanoid(),
        name: 'Cactus',
        isOnSale: true,
        salesPrice: 8,
        price: 19,
        tags: ['Waterless', 'Small'],
        image: ProductImage,
        quantity: 22,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        generalRating: 4,
        userRating: 4,
        timesRated: 1,
    },
    {
        id: nanoid(),
        name: 'Oak',
        isOnSale: true,
        salesPrice: 15,
        price: 25,
        tags: ['Tree', 'Leafes', 'Wood'],
        image: ProductImage,
        quantity: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        generalRating: 3,
        userRating: 3,
        timesRated: 1,
    },
]

export const salesCollectionSlice = createSlice({
    name: 'salesCollection',
    initialState: {
        salesCollection
    },
    reducers: {
        changeRating: (state, action) => {
            const id = action.payload.id;
            state.collection.forEach((item) => {
                if (item.id === id) {
                    item.userRating = action.payload.value;
                }

                // TODO: UPDATE GENERAL RATING
                // item.timesRated += 1;
                // item.generalRating = (item.userRating + item.generalRating) / item.timesRated
                // console.log(item.timesRated);
            })
        }
    }
})

export const { changeRating } = salesCollectionSlice.actions;
export default salesCollectionSlice.reducer;