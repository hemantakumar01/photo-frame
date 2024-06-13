import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ImgURL",
  initialState: {
    localURL: "",
    base64URL: "",
    uplodedImage: [],
  },
  reducers: {
    setLocalUrl: (state, actions) => {
      state.localURL = actions.payload;
    },
    setBaseUrl: (state, actions) => {
      console.log(actions.payload);
      state.base64URL = actions.payload;
    },
    setUplodedImage: (state, actions) => {
      state.uplodedImage = actions.payload;
    },
  },
});
export const { setBaseUrl, setLocalUrl, setUplodedImage } = slice.actions;
export default slice.reducer;
