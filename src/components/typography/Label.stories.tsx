import Label from "./Label";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Components/Typography/Label",
  component: Label,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Example Label",
    size: "md",
    required: false,
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

export const Required: Story = {
  args: { ...Default.args, required: true },
};
