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
    hasError: false,
    disabled: false,
  },
};

const sizes = ["sm", "md", "lg"];
const colors = [
  "base",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "light",
  "dark",
];

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-6">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color) => (
              <label
                key={`${size}-${color}`}
                className="flex flex-col items-center gap-2"
              >
                <Radio {...args} size={size as any} color={color as any} />
                <span className="text-sm">{color}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "radio",
    hasError: false,
    disabled: false,
  },
};
