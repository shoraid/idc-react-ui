/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Forms/Input",
  component: Input,
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
    readOnly: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: "example",
    placeholder: "Enter text...",
    color: "base",
    size: "md",
    hasError: false,
    disabled: false,
    readOnly: false,
    type: "text",
  },
};

export const Variants: Story = {
  render: (args: any) => (
    <div className="space-y-6">
      {meta.argTypes?.size?.options?.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-3 gap-4">
            {meta.argTypes?.color?.options?.map((color) => (
              <Input
                key={`${size}-${color}`}
                {...args}
                size={size}
                color={color}
                placeholder={`${color} - ${size}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "example",
    hasError: false,
    disabled: false,
    readOnly: false,
    type: "text",
  },
};
