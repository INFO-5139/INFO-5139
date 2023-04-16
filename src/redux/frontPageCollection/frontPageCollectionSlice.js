import { createSlice } from "@reduxjs/toolkit";
import ProductImage from "../../assets/product-item.png";
import { nanoid } from "nanoid";

const collection = [
  {
    id: nanoid(),
    name: "Smallest Flower",
    isOnSale: false,
    price: 19,
    tags: ["Flower", "Small", "Stone"],
    image: ProductImage,
    quantity: 13,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    userRating: 3,
    generalRating: 3,
    timesRated: 1,
  },
  {
    id: nanoid(),
    name: "Big Pine Tree",
    isOnSale: false,
    price: 25,
    tags: ["Tree", "Pine", "Wood"],
    image: ProductImage,
    quantity: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    userRating: 4,
    generalRating: 4,
    timesRated: 1,
  },
  {
    id: nanoid(),
    name: "Cactus",
    isOnSale: false,
    price: 10,
    tags: ["Cactus", "Stone"],
    image: ProductImage,
    quantity: 22,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    userRating: 2,
    generalRating: 2,
    timesRated: 1,
  },
  {
    id: nanoid(),
    name: "Christmas Tree",
    isOnSale: false,
    price: 39,
    tags: ["Tree", "Christmas"],
    image: ProductImage,
    quantity: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    userRating: 1,
    generalRating: 1,
    timesRated: 1,
  },
];

export const frontPageCollectionSlice = createSlice({
  name: "frontPageCollection",
  initialState: {
    collection,
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
        // console.log(item.timesRated);
        // item.generalRating = (item.userRating + item.generalRating) / item.timesRated
      });
    },
  },
});

export const { changeRating } = frontPageCollectionSlice.actions;
export default frontPageCollectionSlice.reducer;
