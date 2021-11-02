import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: { login: "deddy prianto sihombing" },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    ubahNamaLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { ubahNamaLogin } = appSlice.actions;

export default appSlice.reducer;
