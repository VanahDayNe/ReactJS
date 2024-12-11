
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reduce/CartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
export default store;