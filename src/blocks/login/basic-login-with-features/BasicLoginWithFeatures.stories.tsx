import BasicLoginWithValidation from "./BasicLoginWithFeatures";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BasicLoginWithValidation> = {
  title: "Blocks/Login/BasicLoginWithValidation",
  component: BasicLoginWithValidation,
  decorators: [
    (Story) => (
      <div className="min-h-screen w-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BasicLoginWithValidation>;

export const Default: Story = {};
