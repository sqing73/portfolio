import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./global.ts";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store/index.ts";
import HomePage from "./pages/HomePage.tsx";

const App: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <PageContainer>
          <HomePage />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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

const PageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 5% 7%;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  justify-content: start;

  &:first-of-type {
    min-height: 95vh;
  }
`;
