import { configureStore } from "@reduxjs/toolkit";
import ReultBoardSlice from "../Pages/Table/resultBoard/ReultBoardSlice";
import registrationBoardReducer from "../Pages/Table/registrationBoard/registrationBoardSlice";
export const store = configureStore({
  reducer: {
    registrationBoard: registrationBoardReducer,
    reultBoard: ReultBoardSlice,
  },
});
