import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CardBody = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge("flex-1 basis-auto p-4", className)} {...rest} />
  );
};

CardBody.displayName = "CardBody";

export default CardBody;
