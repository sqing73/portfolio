import "styled-components";

export interface ThemeState {
  colors: ThemeColor;
  colorId: number;
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeState {}
}

export interface ThemeColor {
  themeName: string;
  main: string;
  secondary: string;
  highlight: string;
  comment: string;
  filter: string;
}

export const themeColors: ThemeColor[] = [
  {
    themeName: "ms-dos",
    main: "#D4D4D4",
    secondary: "#1E1E1E",
    highlight: "#CE9178",
    comment: "#6A9953",
    filter:
      "invert(98%) sepia(1%) saturate(2185%) hue-rotate(205deg) brightness(106%) contrast(66%)",
  },
  {
    themeName: "powershell",
    main: "#EEEDF0",
    secondary: "#012456",
    highlight: "#FFFF00",
    comment: "#008080",
    filter:
      "invert(94%) sepia(6%) saturate(59%) hue-rotate(218deg) brightness(102%) contrast(91%)",
  },
  {
    themeName: "ubuntu",
    main: "#ffffff",
    secondary: "#2d0922",
    highlight: "#6eda34",
    comment: "#bc8b0a",
    filter:
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(107%) contrast(106%)",
  },
  {
    themeName: "light",
    main: "#2b2b2b",
    secondary: "#ffffff",
    highlight: "blue",
    comment: "#008000",
    filter:
      "invert(9%) sepia(0%) saturate(441%) hue-rotate(191deg) brightness(112%) contrast(83%)",
  },
];
