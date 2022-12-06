import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import getUserSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    user : getUserSlice.reducer
  }
})

export default store