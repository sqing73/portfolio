import React, { useEffect } from "react";
import HomePage from "./HomePage.tsx";
import StackPage from "./StackPage.tsx";
import WorkPages from "./WorkPages/WorkPages.tsx";
import { useAppDispatch } from "../store/index.ts";
import {
  typeSpeedSlowed,
  typeSpeedAccelecrated,
} from "../store/settingSlice.ts";
import ContactPage from "./ContactPage.tsx";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let holdTimer: NodeJS.Timeout;
    const handleAccelerate = () => {
      holdTimer = setTimeout(() => {
        dispatch(typeSpeedAccelecrated());
      }, 500);
    };

    const handleSlowDown = () => {
      dispatch(typeSpeedSlowed());
      clearTimeout(holdTimer);
    };

    document.addEventListener("mousedown", handleAccelerate);
    document.addEventListener("mouseup", handleSlowDown);
    document.addEventListener("touchstart", handleAccelerate);
    document.addEventListener("touchend", handleSlowDown);
    document.addEventListener("touchcancel", handleSlowDown);

    return () => {
      document.removeEventListener("mousedown", handleAccelerate);
      document.removeEventListener("mouseup", handleSlowDown);
      document.removeEventListener("touchstart", handleAccelerate);
      document.removeEventListener("touchend", handleSlowDown);
      document.removeEventListener("touchcancel", handleSlowDown);
    };
  }, [dispatch]);

  return (
    <>
      <HomePage />
      <StackPage />
      <WorkPages />
      <ContactPage />
    </>
  );
};

export default MainPage;
