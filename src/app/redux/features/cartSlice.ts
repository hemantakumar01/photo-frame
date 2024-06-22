import { createSlice } from "@reduxjs/toolkit";
type cartItem = {
  _id: string;
  frameUrl: string;
  imageUrl: string;
  price: number;
  quantity: number;
  name: string;
};
type cartSliceType = {
  total: number;
  cart: cartItem[];
};
const initialState: cartSliceType = {
  total: 0,
  cart: [],
};
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex((s) => s._id === action.payload._id);
      if (index !== -1) {
        state.cart[index] = action.payload;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      console.log(action.payload._id);
      const filteredCart = state.cart.filter(
        (i) => i._id !== action.payload._id
      );
      // console.log(state.cart);
      // console.log(filteredCart, "filterd");
      state.cart = filteredCart;
    },
    calculateTotal: (state) => {
      state.total = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});
export const { addToCart, removeCart, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
