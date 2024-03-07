import { ThemeState, themeColors } from "./theme";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
  colors: themeColors[0],
  colorId: 0,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state) => {
      const nextId = (state.colorId + 1) % themeColors.length;
      state.colors = themeColors[nextId];
      state.colorId = nextId;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
