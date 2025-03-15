import { RiLoader2Fill } from "@remixicon/react";
import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof styles> {
  isLoading?: boolean;
}

const Button = ({
  color,
  size,
  isLoading,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={styles({ size, color, className })} {...rest}>
      {isLoading && (
        <RiLoader2Fill
          className="size-4 shrink-0 animate-spin"
          aria-hidden="true"
        />
      )}{" "}
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;

const styles = tv({
  base: [
    "inline-flex cursor-pointer items-center justify-center gap-x-1 font-medium text-gray-900 transition-all duration-200 select-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "dark:text-gray-50 dark:disabled:opacity-70",
  ],
  defaultVariants: {
    size: "md",
    color: "base",
  },
  variants: {
    size: {
      xs: "rounded-sm px-2 py-1 text-xs",
      sm: "rounded-md px-3 py-1.5 text-sm",
      md: "rounded-lg px-4 py-2 text-base",
      lg: "rounded-xl px-6 py-3 text-lg",
      xl: "rounded-xl px-10 py-5 text-xl",
    },
    color: {
      base: ["active:outline-1 active:outline-gray-500"],
      primary: [
        "bg-blue-600 text-gray-50 hover:bg-blue-700 active:bg-blue-700/90",
        "dark:bg-blue-800 dark:hover:bg-blue-900 dark:active:bg-blue-900/90",
      ],
      secondary: [
        "bg-gray-500 text-gray-50 hover:bg-gray-600 active:bg-gray-600/90",
        "dark:bg-gray-700 dark:hover:bg-gray-800 dark:active:bg-gray-800/90",
      ],
      info: [
        "bg-cyan-600 text-gray-50 hover:bg-cyan-700 active:bg-cyan-700/90",
        "dark:bg-cyan-800 dark:hover:bg-cyan-900 dark:active:bg-cyan-900/90",
      ],
      success: [
        "bg-green-600 text-gray-50 hover:bg-green-700 active:bg-green-700/90",
        "dark:bg-green-800 dark:hover:bg-green-900 dark:active:bg-green-900/90",
      ],
      warning: [
        "bg-yellow-600 text-gray-50 hover:bg-yellow-700 active:bg-yellow-700/90",
        "dark:bg-yellow-800 dark:hover:bg-yellow-900 dark:active:bg-yellow-900/90",
      ],
      danger: [
        "bg-red-600 text-gray-50 hover:bg-red-700 active:bg-red-700/90",
        "dark:bg-red-800 dark:hover:bg-red-900 dark:active:bg-red-900/90",
      ],
      light: [
        "bg-gray-200 hover:bg-gray-300 active:bg-gray-300/90",
        "dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-500 dark:active:bg-gray-500/90",
      ],
      dark: [
        "bg-gray-800 text-gray-50 hover:bg-gray-700 active:bg-gray-700/90",
        "dark:bg-gray-800 dark:hover:bg-gray-900 dark:active:bg-gray-900/80",
      ],
    },
  },
});
