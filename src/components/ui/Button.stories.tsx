/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
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
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: "primary",
    size: "md",
    isLoading: false,
    disabled: false,
    children: "Example",
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
              <div>
                <Button
                  key={`${size}-${color}`}
                  {...args}
                  size={size}
                  color={color}
                  placeholder={`${color} - ${size}`}
                >
                  {color + " - " + size}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    isLoading: false,
    disabled: false,
  },
};
