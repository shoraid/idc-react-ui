/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkbox from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
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
    name: "checkbox",
    size: "md",
    color: "base",
    hasError: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-6">
      {meta.argTypes?.size?.options?.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-4 gap-4">
            {meta.argTypes?.color?.options?.map((color) => (
              <label
                key={`${size}-${color}`}
                className="flex flex-col items-center gap-2"
              >
                <Checkbox {...args} size={size as any} color={color as any} />
                <span className="text-sm">{color}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "checkbox",
    hasError: false,
    disabled: false,
  },
};
