import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  count : 0,
}

export const getUserData = createAsyncThunk(
  'user/fetchData',
  async(id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.data
    return data
  }
)

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
    },
    random : (state, action) => {
      state.number = action.payload
    }
  },
    extraReducers: (builder) => {
      builder.addCase(getUserData.pending, (state, action) => {
        state.status = "Loading"
      })
      builder.addCase(getUserData.fulfilled, (state,action) => {
        state.info = action.payload
        state.status = "Complete";
      })
      builder.addCase(getUserData.rejected, (state, action) => {
        state.status = "Fail";
      })
    }
})

export const {increament, decreament, clear,random} = counterSlice.actions

export default counterSlice