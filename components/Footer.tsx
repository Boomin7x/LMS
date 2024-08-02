import React from "react";
import BasicContainer from "./BasicContainer";
import { Button } from "./ui/button";

type Props = {};

const Footer = (props: Props) => {
  const ResourcesData = [
    {
      title: "Docs",
      link: "/docs",
    },
    {
      title: "Learn",
      link: "/learn",
    },
    {
      title: "Showcase",
      link: "/showcase",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Analytics",
      link: "/analytics",
    },
    {
      title: "nextjs",
      link: "/nextjs",
    },
    {
      title: "Previews",
      link: "/previews",
    },
  ];

  const MoreData = [
    {
      title: "Brax commerce",
      link: "/commerce",
    },
    {
      title: "Contact Sales",
      link: "/contactsales",
    },
    {
      title: "Github",
      link: "/github",
    },
    {
      title: "Releases",
      link: "/releases",
    },
    {
      title: "Telemetry",
      link: "/telemetry",
    },
    {
      title: "Governence",
      link: "/governance",
    },
  ];

  const About = [
    {
      title: "Brax Learning",
      link: "/learning",
    },
    {
      title: "Open Source Software",
      link: "/opensource",
    },
    {
      title: "Github",
      link: "/github",
    },
    {
      title: "X",
      link: "/x",
    },
  ];
  const legal = [
    {
      title: "Privacy Policy",
      link: "/privacy",
    },
  ];

  return (
    <div className="border-t">
      <BasicContainer className="my-10">
        <div className="grid grid-cols-6 w-full">
          <div className="flex flex-col">
            <div className="font-bold text-2xl">BRAX.</div>
          </div>
          <div className="flex flex-col text-sm">
            <div className="font-semibold mb-3">Resources</div>
            {ResourcesData?.map((data, i) => (
              <div
                key={i + "ResourcesData"}
                className="mb-2 text-muted-foreground"
              >
                {data?.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col text-sm">
            <div className="font-semibold mb-3">More</div>
            {MoreData?.map((data, i) => (
              <div key={i + "MoreData"} className="mb-2 text-muted-foreground">
                {data?.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col text-sm">
            <div className="font-semibold mb-3">About Brax</div>
            {About?.map((data, i) => (
              <div key={i + "About"} className="mb-2 text-muted-foreground">
                {data?.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col text-sm">
            <div className="font-semibold mb-3">Legal</div>
            {legal?.map((data, i) => (
              <div key={i + "legal"} className="mb-2 text-muted-foreground">
                {data?.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col text-sm">
            <div className="font-semibold mb-3">
              Subscribe to our newsletter
            </div>
            <div className=" text-sm text-muted-foreground">
              Stay updated on new releases and features, guides, and case
              studies.
              <div className="relative bg-neutral-500/10 w-full mt-2 ">
                <input
                  className=" p-3 w-full rounded-lg text-sm pr-[7rem] bg-neutral-100 dark:bg-neutral-100/5"
                  placeholder="you@domain.com"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-[50%] -translate-y-[50%] right-2 h-[2rem]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground text-center mt-8">
          © 2024 <span className="font-semibold text-black">BRAX</span> by
          kodiah Bertrand. All rights reserved.
        </div>
      </BasicContainer>
    </div>
  );
};

export default Footer;
