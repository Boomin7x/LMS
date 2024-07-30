import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Dotbg = ({
  children,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={clsx(
        " inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Dotbg;
