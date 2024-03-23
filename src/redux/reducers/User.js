import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload?.data;
    },
  },
});

export const { setUser } = counterSlice.actions;

export default userSlice.reducer;
