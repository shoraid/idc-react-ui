import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CardFooter = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={twMerge("px-4 py-2", className)} {...rest} />;
};

CardFooter.displayName = "CardFooter";

export default CardFooter;
