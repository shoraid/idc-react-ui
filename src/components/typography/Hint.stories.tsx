import Hint from "./Hint";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hint> = {
  title: "Components/Typography/Hint",
  component: Hint,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    hasSuccess: {
      control: "boolean",
    },
    hasError: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    children: "Example Hint",
    size: "md",
    hasSuccess: false,
    hasError: false,
  },
};

export const ExtraSmall: Story = {
  args: { ...Default.args, size: "xs" },
};

export const Small: Story = {
  args: { ...Default.args, size: "sm" },
};

export const Medium: Story = {
  args: { ...Default.args, size: "md" },
};

export const Large: Story = {
  args: { ...Default.args, size: "lg" },
};

export const HasSuccess: Story = {
  args: { ...Default.args, hasSuccess: true },
};

export const HasError: Story = {
  args: { ...Default.args, hasError: true },
};

export const HasSuccessAndError: Story = {
  args: { ...Default.args, hasSuccess: true, hasError: true },
};
