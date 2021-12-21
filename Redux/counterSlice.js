import { createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data:[]
  },
  reducers: {
    Adddata:(state,action)=>{
      state.data =action.payload
    }
  },
});
export const {Adddata } = counterSlice.actions;
export default counterSlice.reducer;