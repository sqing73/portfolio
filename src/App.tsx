import React, { useEffect } from "react";
import Header from "./components/Header";
import GlobalStyle from "./global.ts";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store/index.ts";
import HomePage from "./pages/HomePage.tsx";
import StackPage from "./pages/StackPage.tsx";
import { useAppDispatch } from "./store/index.ts";
import {
  typeSpeedSlowed,
  typeSpeedAccelecrated,
} from "./store/settingSlice.ts";

const App: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <HomePage />
        <StackPage />
        {/* TODO:adjust space for stackpage */}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: " ";
    opacity: 0.3;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 10;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
`;
