import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Dotbg = ({ children }: Props) => {
  return (
    <div className=" inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {children}
    </div>
  );
};

export default Dotbg;
