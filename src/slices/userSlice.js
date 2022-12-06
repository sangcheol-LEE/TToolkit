// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getUserData = createAsyncThunk(
//   'user/fetchData',
//   async(id) => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const data = await response.data
//     return data
//   }
// )

// const getUserSlice = createSlice({
//   name : "getUser",
//   initialState:{},
//   extraReducers: (builder) => {
//     builder.addCase(getUserData.pending, (state, action) => {
//       state.status = "Loading"
//     })
//     builder.addCase(getUserData.fulfilled, (state,action) => {
//       state.info = action.payload;
//       state.status = "Complete";
//     })
//     builder.addCase(getUserData.rejected, (state, action) => {
//       state.status = "Fail";
//     })
//   }
// })

// export default getUserSlice