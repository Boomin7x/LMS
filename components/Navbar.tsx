"use client";
import React from "react";
import BasicContainer from "./BasicContainer";
import { Button } from "./ui/button";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

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
          <NavToggle />
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

const NavToggle = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navbar;
