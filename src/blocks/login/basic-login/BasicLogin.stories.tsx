import BasicLogin from "./BasicLogin";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BasicLogin> = {
  title: "Blocks/Login/BasicLogin",
  component: BasicLogin,
  decorators: [
    (Story) => (
      <div className="min-h-screen w-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BasicLogin>;

export const Default: Story = {};
