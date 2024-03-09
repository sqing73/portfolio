import Header from "./Header";
import { CommonStoryDecorator } from "../stories/CommonDecorator";
import { expect, fireEvent, within } from "@storybook/test";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  decorators: [
    CommonStoryDecorator,
    (Component: typeof Header) => {
      return (
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "200px",
            opacity: 0.5,
          }}
        >
          <Component />;
        </div>
      );
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByRole("button"));
    const items = canvas.getAllByRole("listitem");
    expect(items.length).toBe(4);
    items.pop();
    const navItems = ["home", "works", "about me"];
    items.forEach((element, idx) => {
      expect(element.innerText).toBe(navItems[idx].toUpperCase());
    });
  },
};

export default meta;

export const Default = () => <Header />;
