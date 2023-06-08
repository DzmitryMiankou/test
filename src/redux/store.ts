import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./RTK/rtk";

const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
});



const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        }).concat(apiSlice.middleware),
});


export default store;
