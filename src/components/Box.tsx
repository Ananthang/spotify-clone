import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}
function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `bg-neutral-800 rounded-lg h-fit w-full`,
        `${className}`
      )}
    >
      {children}
    </div>
  );
}

export default Box;
