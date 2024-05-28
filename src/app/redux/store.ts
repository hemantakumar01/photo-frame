import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "./features/imgSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const makeStore = configureStore({
  reducer: {
    ImageReducer,
  },
});

// Infer the type of makeStore

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
