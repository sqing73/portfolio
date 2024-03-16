import { Provider as ReduxProvider } from "react-redux";
import { FC, ReactNode } from "react";
import { createStore, useAppSelector } from "../store";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

export const store = createStore();

export const CommonStoryDecorator = (Component: FC) => (
  <ReduxProvider store={store}>
    <Router>
      <ThemeAwareDecorator>
        <Component />
      </ThemeAwareDecorator>
    </Router>
  </ReduxProvider>
);

interface Props {
  readonly children: ReactNode;
}

const ThemeAwareDecorator = ({ children }: Props) => {
  const theme = useAppSelector((state) => state.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
