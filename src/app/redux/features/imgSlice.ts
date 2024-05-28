import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ImgURL",
  initialState: {
    localURL: "",
    base64URL: "",
  },
  reducers: {
    setLocalUrl: (state, actions) => {
      state.localURL = actions.payload;
    },
    setBaseUrl: (state, actions) => {
      console.log(actions.payload);
      state.base64URL = actions.payload;
    },
  },
});
export const { setBaseUrl, setLocalUrl } = slice.actions;
export default slice.reducer;
