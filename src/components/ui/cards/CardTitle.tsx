import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CardTitle = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={twMerge("mb-2", className)} {...rest} />;
};

CardTitle.displayName = "CardTitle";

export default CardTitle;
