import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export interface HintProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles> {}

const Hint = ({
  size,
  hasError,
  hasSuccess,
  className,
  children,
  ...rest
}: HintProps) => {
  if (!children) {
    return;
  }

  return (
    <div
      className={styles({ size, hasError, hasSuccess, className })}
      {...rest}
    >
      {children}
    </div>
  );
};

Hint.displayName = "Hint";

export default Hint;

const styles = tv({
  base: "text-gray-900 dark:text-gray-50",
  defaultVariants: {
    size: "md",
    hasError: false,
    hasSuccess: false,
  },
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    hasError: {
      true: "text-red-600 dark:text-red-400",
    },
    hasSuccess: {
      true: "text-green-600 dark:text-green-400",
    },
  },
  compoundVariants: [
    {
      hasError: true,
      hasSuccess: true,
      className: "text-red-600 dark:text-red-400",
    },
  ],
});
