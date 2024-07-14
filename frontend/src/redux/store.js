import { configureStore } from "@reduxjs/toolkit";
import { reducersMapping } from "./slices";

const store = configureStore({
    reducer: reducersMapping
})

export default store;