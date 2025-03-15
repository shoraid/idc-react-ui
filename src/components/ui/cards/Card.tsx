import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        [
          "relative flex w-full flex-col",
          "rounded-lg border border-gray-300 bg-white text-wrap text-gray-900",
          "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
        ],
        className,
      )}
      {...rest}
    />
  );
};

Card.displayName = "Card";

export default Card;
