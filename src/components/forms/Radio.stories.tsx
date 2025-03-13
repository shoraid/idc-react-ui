/* eslint-disable @typescript-eslint/no-explicit-any */
import Radio from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Components/Forms/Radio",
  component: Radio,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
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
    hasError: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: "radio",
    size: "md",
    color: "base",
  },
};

export const WithError: Story = {
  args: {
    name: "radio",
    size: "md",
    color: "danger",
    hasError: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "radio",
    size: "md",
    color: "base",
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="grid grid-cols-4 items-center gap-8">
      {["sm", "md", "lg"].map((size) => (
        <label key={size} className="flex flex-col items-center gap-2">
          <Radio name="radio" id={size} size={size as any} />
          <span className="text-lg">{size}</span>
        </label>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8">
      {[
        "base",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ].map((color) => (
        <label key={color} className="flex flex-col items-center gap-1">
          <Radio name="radio" id={color} size="md" color={color as any} />
          <span className="text-lg">{color}</span>
        </label>
      ))}
    </div>
  ),
};
