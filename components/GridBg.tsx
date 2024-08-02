import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GridBg = ({
  children,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      //   className={" inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" }
      className={clsx(
        " inset-0 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808026_1px,transparent_1px),linear-gradient(to_bottom,#80808026_1px,transparent_1px)] bg-[size:24px_24px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridBg;
