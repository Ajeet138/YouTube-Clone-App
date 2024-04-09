import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "appConfig",
  initialState: {
    toggleNavbar: true,
  },
  reducers: {
    onToggleSideBar: (state) => {
      state.toggleNavbar = !state.toggleNavbar;
    },
    hideSideBar: (state) => {
      state.toggleNavbar = false;
    },
  },
});

export const { onToggleSideBar, hideSideBar } = appSlice.actions;
export default appSlice.reducer;
