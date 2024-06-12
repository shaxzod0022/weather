import { createSlice } from "@reduxjs/toolkit";

export const counterMovie = createSlice({
  name: "movieData",
  initialState: {
    data: [],
  },
  reducers: {
    createData: (item, action) => {
      item.data = [action.payload];
    },
  },
});

export const { createData } = counterMovie.actions;
export default counterMovie.reducer;
