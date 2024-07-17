import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrationBoard: [],
};

const registrationBoardSlice = createSlice({
  name: "registrationBoard",
  initialState,
  reducers: {
    handleCheckbox: (state, action) => {
      state.registrationBoard = action.payload;
    },
    removeItem: (state, action) => {
      state.registrationBoard = state.registrationBoard.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { handleCheckbox, removeItem } = registrationBoardSlice.actions;

export default registrationBoardSlice.reducer;
