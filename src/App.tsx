import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import { useAppSelector } from "./store/index.ts";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./global.ts";
import BlogPage from "./pages/BlogPage.tsx";

const App = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppContainer>
      </ThemeProvider>
    </Router>
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
