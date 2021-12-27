import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    data: [],
    userData: {},
    navigator: {},
  },
  reducers: {
    Adddata: (state, action) => {
      state.data = action.payload;
    },
    setuserData: (state, action) => {
      state.userData = action.payload;
      console.log("In redux user data", state.userData);
    },
    setnavigator: (state, action) => {
      state.navigator = action.payload;
      console.log("item in redux", state.navigator);
    },
  },
});
export const { Adddata, setuserData, setnavigator } = counterSlice.actions;
export default counterSlice.reducer;
