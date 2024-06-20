import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "./features/imgSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import cartSlice from "./features/cartSlice";
export const makeStore = configureStore({
  reducer: {
    ImageReducer,
    cartSlice,
  },
});

// Infer the type of makeStore

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
