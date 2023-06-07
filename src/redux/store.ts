import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({

});



const store = configureStore({
    reducer: rootReducers,

});


export default store;
