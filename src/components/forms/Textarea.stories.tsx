/* eslint-disable @typescript-eslint/no-explicit-any */
import Textarea from "./Textarea";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  title: "Components/Forms/Textarea",
  component: Textarea,
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
    readOnly: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    name: "example",
    placeholder: "Enter text...",
    color: "base",
    size: "md",
    hasError: false,
    disabled: false,
    readOnly: false,
    rows: 3,
  },
};

export const Variants: Story = {
  render: (args: any) => (
    <div className="space-y-6 pb-8">
      {meta.argTypes?.size?.options?.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-3 gap-4">
            {meta.argTypes?.color?.options?.map((color) => (
              <Textarea
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
  },
};
