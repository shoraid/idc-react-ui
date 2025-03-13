/* eslint-disable @typescript-eslint/no-explicit-any */
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

const sizes = ["xs", "sm", "md", "lg"];
const requiredStates = [false, true];

export const Variants: Story = {
  render: (args: any) => (
    <div className="space-y-6">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-lg font-semibold">Size: {size}</h3>
          <div className="grid grid-cols-2 gap-6">
            {requiredStates.map((required) => (
              <div
                key={`${size}-${required}`}
                className="flex flex-col items-center gap-2"
              >
                <Label {...args} size={size} required={required}>
                  {required ? "Required" : "Optional"}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: "Example Label",
  },
};
