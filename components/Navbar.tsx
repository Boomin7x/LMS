"use client";
import React from "react";
import BasicContainer from "./BasicContainer";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const navItems = [
    {
      name: "showcase",
    },
    {
      name: "Docs",
    },
    {
      name: "Blog",
    },
    { name: "Templates" },
    {
      name: "Enterprise",
    },
  ];
  return (
    <nav className="flex items-center gap-6  h-[4rem] border-b backdrop-blur-sm fixed w-full z-[100] bg-white/80 dark:bg-black/80 ">
      <BasicContainer className=" flex-row  items-center ">
        <div className="w-full flex flex-row gap-6 items-center">
          <div className="font-bold text-xl">BRAX.</div>
          {navItems?.map((items) => (
            <div
              key={items?.name}
              className="text-sm cursor-pointer text-muted-foreground hover:text-black"
            >
              {items?.name}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center h-full gap-4 justify-end">
          <Button
            size="sm"
            variant="secondary"
            className="w-[17rem] flex items-center justify-between"
          >
            <text className="text-muted-foreground">
              Search documentation ...
            </text>
            <text className="border px-1 rounded bg-white dark:bg-black text-sm">
              CtrlK
            </text>
          </Button>
          <Button size="sm" variant="outline">
            Feedback
          </Button>
          <Button size="sm" variant="flat">
            Learn
          </Button>
        </div>
      </BasicContainer>
    </nav>
  );
};

export default Navbar;
