import ThemeButton from "./ThemeButton";
import { CommonStoryDecorator, store } from "./CommonDecorator";
import { expect, fireEvent, within } from "@storybook/test";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof ThemeButton> = {
  title: "ThemeButton",
  component: ThemeButton,
  decorators: [
    CommonStoryDecorator,
    (Component: typeof ThemeButton) => {
      return (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: 100,
            height: 100,
            backgroundColor: "grey",
          }}
        >
          <Component />
        </div>
      );
    },
  ],
  play: async ({ canvasElement }) => {
    const currTheme = store.getState().theme.colorId;
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByRole("button"));
    expect(store.getState().theme.colorId).toBe(currTheme + 1);
  },
};

export default meta;

export const Dedault = () => <ThemeButton />;
