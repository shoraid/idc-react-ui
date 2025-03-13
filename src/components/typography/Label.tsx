import { LabelHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: "xs" | "sm" | "md" | "lg";
  required?: boolean;
}

const Label = ({
  size,
  required,
  className,
  children,
  ...rest
}: LabelProps) => {
  return (
    <div>
      <label className={styles({ size, className })} {...rest}>
        {children}{" "}
        {required && <span className={styles({ size, required })}>*</span>}
      </label>
    </div>
  );
};

Label.displayName = "Label";

export default Label;

const styles = tv({
  base: "font-medium text-gray-950 dark:text-gray-50",
  defaultVariants: {
    size: "md",
    required: false,
  },
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    required: {
      true: "text-red-500 dark:text-red-400",
    },
  },
});
