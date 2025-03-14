import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CardSubtitle = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={twMerge("mt-1 mb-0", className)} {...rest} />;
};

CardSubtitle.displayName = "CardSubtitle";

export default CardSubtitle;
