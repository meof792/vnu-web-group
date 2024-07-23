import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reultBoard: {},
};

const reultBoardSlice = createSlice({
  name: "reultBoard",
  initialState,
  reducers: {
    tc: (state, action) => {
      state.reultBoard = action.payload;
    },
  },
});

export const { tc } = reultBoardSlice.actions;
export default reultBoardSlice.reducer;
