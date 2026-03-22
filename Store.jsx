import { configureStore, createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inc: (state) => state + 1
  }
});

export const { inc } = counter.actions;

export default configureStore({
  reducer: counter.reducer
});