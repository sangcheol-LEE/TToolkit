import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count : 0
}

const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers: {
    increament : (state, action) => {
      state.count += 1
    },
    decreament: (state, action) => {
      state.count -= 1
    },
    clear : (state, action) => {
      console.log("action",action)
      state.count += action.payload
    }
  }
})

export const {increament, decreament, clear} = counterSlice.actions

export default counterSlice