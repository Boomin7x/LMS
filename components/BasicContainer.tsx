import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const BasicContainer = ({ children, ...props }: Props) => {
  return (
    <div className="flex flex-col h-full container mx-auto" {...props}>
      {children}
    </div>
  );
};

export default BasicContainer;
