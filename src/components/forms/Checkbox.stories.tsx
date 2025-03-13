import Checkbox from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      control: "select",
      options: [
        "base",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    hasError: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    name: "example",
    color: "base",
    size: "md",
    hasError: false,
    disabled: false,
  },
};

export const Base: Story = {
  args: { ...Default.args, color: "base" },
};

export const Primary: Story = {
  args: { ...Default.args, color: "primary" },
};

export const Secondary: Story = {
  args: { ...Default.args, color: "secondary" },
};

export const Info: Story = {
  args: { ...Default.args, color: "info" },
};

export const Success: Story = {
  args: { ...Default.args, color: "success" },
};

export const Warning: Story = {
  args: { ...Default.args, color: "warning" },
};

export const Danger: Story = {
  args: { ...Default.args, color: "danger" },
};

export const Light: Story = {
  args: { ...Default.args, color: "light" },
};

export const Dark: Story = {
  args: { ...Default.args, color: "dark" },
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

export const ErrorState: Story = {
  args: { ...Default.args, hasError: true },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
