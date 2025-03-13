/* eslint-disable @typescript-eslint/no-explicit-any */
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

const sizes = ["xs", "sm", "md", "lg"];
const states = [
  { hasSuccess: false, hasError: false, label: "Default" },
  { hasSuccess: true, hasError: false, label: "Success" },
  { hasSuccess: false, hasError: true, label: "Error" },
  { hasSuccess: true, hasError: true, label: "Success & Error" },
];

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-6">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-4 gap-4">
            {states.map(({ hasSuccess, hasError, label }) => (
              <div
                key={`${size}-${label}`}
                className="flex flex-col items-center gap-2"
              >
                <Hint
                  {...args}
                  size={size as any}
                  hasSuccess={hasSuccess}
                  hasError={hasError}
                >
                  {label}
                </Hint>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: "Example Hint",
  },
};
