import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newCount: 0,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    setNewCount: (state, action) => {
      state.newCount = state.newCount + 1;
    },
  },
});

export const { setNewCount } = commonSlice.actions;
export default commonSlice.reducer;
