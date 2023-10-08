import { configureStore } from "@reduxjs/toolkit";
import art from './art'
import buy from "./buy"

const store = configureStore({
    reducer: {
        art,
        buy
    }
})

export default store