import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./RTK/rtk";
import getListCallReducer from "./reducers/listCall-reducer";

const rootReducers = combineReducers({
  listCallReducer: getListCallReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
