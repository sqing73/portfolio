import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import themeReducer from "./themeSlice";
import settingReducer from "./settingSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    setting: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector<RootState, T>(selector);

export default store;

export const createStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      setting: settingReducer,
    },
  });
