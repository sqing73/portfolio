import HomePage from "./HomePage";
import { CommonStoryDecorator } from "../stories/CommonDecorator";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof HomePage> = {
  title: "Home Page",
  component: HomePage,
  decorators: [
    CommonStoryDecorator,
    (Component: typeof HomePage) => {
      return (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        >
          <Component />
        </div>
      );
    },
  ],
};

export default meta;

export const Default = () => <HomePage />;
