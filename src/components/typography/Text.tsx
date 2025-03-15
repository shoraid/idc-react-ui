import { ReactNode } from "react";
import { tv } from "tailwind-variants";

export interface TextProps {
  variant?: "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  children?: ReactNode;
}

const Text = ({ variant, size, className, ...rest }: TextProps) => {
  return <span className={styles({ variant, size, className })} {...rest} />;
};

Text.displayName = "Text";

export default Text;

const styles = tv({
  base: "text-gray-950 dark:text-gray-50",
  defaultVariants: {
    size: "md",
  },
  variants: {
    variant: {
      link: "cursor-pointer text-blue-600 dark:text-blue-700",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
});
