import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CardHeader = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge("mb-0 px-4 pt-4 pb-2", className)} {...rest} />
  );
};

CardHeader.displayName = "CardHeader";

export default CardHeader;
