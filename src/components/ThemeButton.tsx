import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../store";
import { updateTheme } from "../store/themeSlice";

const ThemeButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const [rotation, setRotation] = useState<number>(0.5);
  const handleThemeUpdate = () => {
    dispatch(updateTheme());
    setRotation((prev) => prev * -1);
  };
  return (
    <ToggleButton onClick={handleThemeUpdate} $transformDeg={rotation}>
      <ToggleImg
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0NyA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEgMjMuNUM0MSAzMy4xNjUgMzMuMTY1IDQxIDIzLjUgNDFDMjMuMzMyOCA0MSAyMy4xNjYxIDQwLjk5NzcgMjMgNDAuOTkzVjYuMDA3MDFDMjMuMTY2MSA2LjAwMjM1IDIzLjMzMjggNiAyMy41IDZDMzMuMTY1IDYgNDEgMTMuODM1IDQxIDIzLjVaTTIzIDQ2Ljk5NDhDMjMuMTY2MiA0Ni45OTgzIDIzLjMzMjkgNDcgMjMuNSA0N0MzNi40Nzg3IDQ3IDQ3IDM2LjQ3ODcgNDcgMjMuNUM0NyAxMC41MjEzIDM2LjQ3ODcgMCAyMy41IDBDMjMuMzMyOSAwIDIzLjE2NjIgMC4wMDE3NDM2MyAyMyAwLjAwNTIxMzY5QzEwLjI1MjIgMC4yNzEyOTcgMCAxMC42ODg0IDAgMjMuNUMwIDM1LjY2NzUgOS4yNDcyNCA0NS42NzUyIDIxLjA5NzMgNDYuODc4N0MyMS43MjQ1IDQ2Ljk0MjQgMjIuMzU5MSA0Ni45ODE0IDIzIDQ2Ljk5NDhaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="
        alt="toggle theme"
      />
    </ToggleButton>
  );
};

export default ThemeButton;

interface ToggleButtonProps {
  $transformDeg: number;
  onClick: () => void;
}

const ToggleButton = styled.button.attrs<ToggleButtonProps>((props) => ({
  $transformDeg: props.$transformDeg,
}))<ToggleButtonProps>`
  /* margin-top: 10px; */
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: all 0.5s;
  z-index: 5;
  padding: 1px;
  background: transparent;
  transform: rotate(${(props) => props.$transformDeg}turn);

  &:focus {
    outline-width: 1px;
    outline-style: dotted;
    outline-color: ${(props) => props.theme.colors.main};
  }
`;

const ToggleImg = styled.img`
  height: 100%;
  position: relative;
  transition: all 0.3s;
  filter: ${(props) => props.theme.colors.filter};
  opacity: 1;

  &:hover {
    transform: scale(1.3);
  }
`;
