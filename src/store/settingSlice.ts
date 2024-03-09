import { SettingState } from "./settings";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SettingState = {
  typeDelay: 100,
};

const settingSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    typeSpeedSlowed: (state) => {
      state.typeDelay = 100;
    },
    typeSpeedAccelecrated: (state) => {
      state.typeDelay = 20;
    },
  },
});

export const { typeSpeedSlowed, typeSpeedAccelecrated } = settingSlice.actions;
export default settingSlice.reducer;
