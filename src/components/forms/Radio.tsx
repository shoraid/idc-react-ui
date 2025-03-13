/**
 * Don't forget to copy the checklist icon.
 * The file path is: project-name/public/assets/circle-fill.svg
 */
import { InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof styles> {}

const Radio = ({
  name,
  size,
  color,
  hasError,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      type="radio"
      name={name}
      className={styles({ size, color, hasError, className })}
      {...rest}
    />
  );
};

Radio.displayName = "Radio";

export default Radio;

const styles = tv({
  base: [
    "appearance-none rounded-full border transition-all duration-200",
    "focus:ring-4",
    "checked:bg-[url('/assets/circle-fill.svg')]",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  defaultVariants: {
    size: "md",
    color: "base",
    hasError: false,
  },
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
    color: {
      base: [
        "border-gray-300 checked:border-indigo-600 checked:bg-indigo-600 focus:ring-indigo-200",
        "dark:border-gray-600 dark:checked:border-indigo-800 dark:checked:bg-indigo-800 dark:focus:ring-indigo-600/40",
      ],
      primary: [
        "border-blue-300 checked:border-blue-600 checked:bg-blue-600 focus:ring-blue-200",
        "dark:border-blue-600 dark:checked:border-blue-800 dark:checked:bg-blue-800 dark:focus:ring-blue-600/40",
      ],
      secondary: [
        "border-gray-400 checked:border-gray-500 checked:bg-gray-500 focus:ring-gray-200",
        "dark:border-gray-500 dark:checked:border-gray-600 dark:checked:bg-gray-600 dark:focus:ring-gray-600/40",
      ],
      info: [
        "border-cyan-300 checked:border-cyan-600 checked:bg-cyan-600 focus:ring-cyan-200",
        "dark:border-cyan-600 dark:checked:border-cyan-800 dark:checked:bg-cyan-800 dark:focus:ring-cyan-600/40",
      ],
      success: [
        "border-green-300 checked:border-green-600 checked:bg-green-600 focus:ring-green-200",
        "dark:border-green-600 dark:checked:border-green-800 dark:checked:bg-green-800 dark:focus:ring-green-600/40",
      ],
      warning: [
        "border-yellow-300 checked:border-yellow-600 checked:bg-yellow-600 focus:ring-yellow-200",
        "dark:border-yellow-600 dark:checked:border-yellow-800 dark:checked:bg-yellow-800 dark:focus:ring-yellow-600/40",
      ],
      danger: [
        "border-red-300 checked:border-red-600 checked:bg-red-600 focus:ring-red-200",
        "dark:border-red-600 dark:checked:border-red-800 dark:checked:bg-red-800 dark:focus:ring-red-600/40",
      ],
      light: [
        "border-gray-200 checked:border-gray-400 checked:bg-gray-400 focus:ring-gray-200",
        "dark:border-gray-400 dark:checked:border-gray-400 dark:checked:bg-gray-400 dark:focus:ring-gray-400/40",
      ],
      dark: [
        "border-gray-600 checked:border-gray-700 checked:bg-gray-700 focus:ring-gray-400",
        "dark:border-gray-600 dark:checked:border-gray-800 dark:checked:bg-gray-800 dark:focus:ring-gray-800/40",
      ],
    },
    hasError: {
      true: [
        "border-red-300 checked:border-red-600 checked:bg-red-600 focus:ring-red-200",
        "dark:border-red-600 dark:checked:border-red-800 dark:checked:bg-red-800 dark:focus:ring-red-600/40",
      ],
    },
  },
});
