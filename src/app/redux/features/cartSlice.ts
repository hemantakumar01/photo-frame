import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    total: 0,
    cart: [
      {
        _id: "",
        frameUrl: "",
        imageUrl: "",
        price: 0,
        quantity: 0,
      },
    ],
  },
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
      state.cart = state.cart.filter((i) => i._id === action.payload._id);
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
