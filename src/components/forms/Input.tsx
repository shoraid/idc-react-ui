import { InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof styles> {
  hasError?: boolean;
}

const Input = ({
  type = "text",
  id,
  name,
  size,
  color,
  hasError,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id ?? name}
      className={styles({ size, color, hasError, className })}
      {...rest}
    />
  );
};

Input.displayName = "Input";

export default Input;

const styles = tv({
  base: [
    "block w-full border text-gray-900 transition",
    "focus:ring-4 focus:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "dark:text-gray-100",
  ],
  defaultVariants: {
    size: "md",
    color: "base",
    hasError: false,
  },
  variants: {
    size: {
      sm: "rounded-md px-3 py-1.5 text-sm",
      md: "rounded-lg px-4 py-2 text-base",
      lg: "rounded-xl px-6 py-3 text-lg",
    },
    color: {
      base: [
        "border-gray-300 focus:border-indigo-600 focus:ring-indigo-200",
        "dark:border-gray-600 dark:focus:border-indigo-800 dark:focus:ring-indigo-600/40",
      ],
      primary: [
        "border-blue-500 focus:border-blue-600 focus:ring-blue-200",
        "dark:border-blue-700 dark:focus:border-blue-600 dark:focus:ring-blue-600/40",
      ],
      secondary: [
        "border-gray-500 focus:border-gray-600 focus:ring-gray-200",
        "dark:border-gray-700 dark:focus:border-gray-600 dark:focus:ring-gray-600/40",
      ],
      info: [
        "border-cyan-500 focus:border-cyan-600 focus:ring-cyan-200",
        "dark:border-cyan-700 dark:focus:border-cyan-600 dark:focus:ring-cyan-600/40",
      ],
      success: [
        "border-green-500 focus:border-green-600 focus:ring-green-200",
        "dark:border-green-700 dark:focus:border-green-600 dark:focus:ring-green-600/40",
      ],
      warning: [
        "border-yellow-500 focus:border-yellow-600 focus:ring-yellow-200",
        "dark:border-yellow-700 dark:focus:border-yellow-600 dark:focus:ring-yellow-600/40",
      ],
      danger: [
        "border-red-500 focus:border-red-600 focus:ring-red-200",
        "dark:border-red-700 dark:focus:border-red-600 dark:focus:ring-red-600/40",
      ],
      light: [
        "border-gray-200 focus:border-gray-300 focus:ring-gray-100",
        "dark:border-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-400/40",
      ],
      dark: [
        "border-gray-600 focus:border-gray-700 focus:ring-gray-400",
        "dark:border-gray-900 dark:focus:border-gray-800 dark:focus:ring-gray-700/40",
      ],
    },
    hasError: {
      true: [
        "border-red-500 focus:border-red-600 focus:ring-red-200",
        "dark:border-red-700 dark:focus:border-red-600 dark:focus:ring-red-600/40",
      ],
      false: "",
    },
  },
});
