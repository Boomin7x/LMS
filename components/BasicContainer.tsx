import { cn } from "@/lib/utils";
import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BasicContainer = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn("flex flex-col h-full container mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default BasicContainer;
