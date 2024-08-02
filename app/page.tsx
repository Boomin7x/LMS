"use client";
import { AnimatePresence, motion } from "framer-motion";
import BasicContainer from "@/components/BasicContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Marqueez from "@/components/Marqueez";
import { describe } from "node:test";
import { DialogDescription } from "@/components/ui/dialog";
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import GridBg from "@/components/GridBg";
import { CogIcon } from "lucide-react";
import Dotbg from "@/components/Dotbg";
import { BeamBorder, MovingBorder } from "@/components/beamBorder";
import { cn } from "@/lib/utils";
import { CloseIcon, ExpandableCardDemo } from "@/components/cardExpandable";
import useAnimatedGrid from "@/hooks/useAnimatedGrid";
import {
  rotate,
  rotateHover,
  translateX,
  translateXHover,
  translateY,
} from "@/lib/animationVariable";

export default function Home() {
  const FeaturesArray = [
    {
      image: "/lms/img1.jpg",
      title: "Interactive Courses",
      description:
        "Deliver engaging and interactive content with multimedia support, quizzes, and discussion forums.",
    },
    {
      image: "/lms/img2.jpg",
      title: "Seamless Integration",
      description:
        "Integrate effortlessly with your existing tools and platforms, including Google Classroom, Microsoft Teams, and more.",
    },
    {
      image: "/lms/img3.jpg",
      title: "Real-Time Analytics",
      description:
        "Track student progress and performance with our comprehensive analytics dashboard.",
    },
    {
      image: "/lms/img4.jpg",
      title: "Mobile-Friendly",
      description:
        "Access learning materials anytime, anywhere with our fully responsive design.",
    },
    {
      image: "/lms/img5.jpg",
      title: "Customizable",
      description:
        "Tailor the LMS to meet your institution's unique needs with our flexible customization options.",
    },
  ];

  const WhatsArray = [
    {
      title: "Monitor and Improve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere ullam ad necessitatibus veritatis nulla! Consectetur, mollitia deleniti maiores incidunt sint quaerat fugit aspernatur quisquam sapiente. Sit ipsa optio consequatur",
    },
    {
      title: "Collaboration Tools",
      description:
        "Facilitate communication and collaboration through discussion forums, chat features, and group projects. Enhance peer-to-peer learning and foster a collaborative learning environment.",
    },
    {
      title: "Compliance and Security",
      description:
        "Maintain high standards of data privacy and security. Ensure the LMS complies with educational regulations and standards, protecting sensitive information and maintaining user trust.",
    },
  ];

  const content = (
    <p>
      Lana Del Rey, an iconic American singer-songwriter, is celebrated for her
      melancholic and cinematic music style. Born Elizabeth Woolridge Grant in
      New York City, she has captivated audiences worldwide with her haunting
      voice and introspective lyrics. <br /> <br /> Her songs often explore
      themes of tragic romance, glamour, and melancholia, drawing inspiration
      from both contemporary and vintage pop culture. With a career that has
      seen numerous critically acclaimed albums, Lana Del Rey has established
      herself as a unique and influential figure in the music industry, earning
      a dedicated fan base and numerous accolades.
    </p>
  );
  const coursesArray = [
    {
      title: "Main Course 1",
      description: "Main Course essenatials and vagues",
      src: "/courses/course1.png",
      content: () => content,
    },
    {
      title: "Main Course 2",
      description: "Main Course essenatials and vagues",
      src: "/courses/couse2.png",
      content: () => content,
    },
    {
      title: "Main Course 3",
      description: "Main Course essenatials and vagues",
      src: "/courses/course3.png",
      content: () => content,
    },
    {
      title: "Main Course 4",
      description: "Main Course essenatials and vagues",
      src: "/courses/course4.png",
      content: () => content,
    },
    {
      title: "Main Course 5",
      description: "Main Course essenatials and vagues",
      src: "/courses/course5.png",
      content: () => content,
    },
  ];

  const newCourse = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        );
      },
    },
  ];

  const FeatureComponentArray = FeaturesArray?.map((items, i) => (
    <FeatureCard key={i} {...items} />
  ));

  const { active, id, ref, setActive } = useAnimatedGrid({
    cards: coursesArray,
  });

  const [hoverCards, setHoverCards] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center  py-24 ">
      <section className="flex flex-col justify-center h-[60vh]  ">
        <BasicContainer className="justify-center">
          <h1 className="text-6xl font-semibold  w-full mx-auto text-center tracking-tight leading-tight ">
            Revolutionize your learning{" "}
            <span className="text-primary">
              {" "}
              Experience <br /> with BRAX Learning{" "}
            </span>
          </h1>
          <h3 className="text-xl w-3/5 mx-auto my-8 text-center ">
            Empower your institution with our state-of-the-art LMS, designed to
            enhance learning, streamline administration, and foster engagement.
          </h3>
          <div className="w-full flex justify-center my-4 gap-3">
            <Button variant="outline" className="w-1/5">
              Contact us now
            </Button>
            <Button variant="flat" className="w-1/5">
              Get Started Now
            </Button>
          </div>
          <h3 className="text-md text-center my-8 w-1/5 mx-auto">
            Join thousands of institutions transforming education with{" "}
            <span className="font-bold">BRAX Learning</span>
          </h3>
        </BasicContainer>
      </section>
      <section className=" w-full mb-10 py-12 bg-neutral-800 text-neutral-100">
        <h1 className="font-semibold text-5xl text-center tracking-tighter my-4">
          Features
        </h1>
        <h3 className="text-center ">
          Key Features of <span className="font-bold">BRAX Learning</span>
        </h3>
        <div className="w-full flex overflow-hidden my-8">
          <Marqueez data={FeatureComponentArray} />
          <Marqueez data={FeatureComponentArray} />
        </div>
      </section>
      <section className="w-full my-10 h-[70vh] flex flex-col">
        <div className="w-full  flex justify-center gap-4 items-end">
          <h1 className="font-semibold text-4xl tracking-tighter">
            How does BRAX Learning Works?
          </h1>
          <h3 className="text-lg font-[500] text-muted-foreground">
            Everything you need to know about BRAX Learning
          </h3>
        </div>
        <BasicContainer>
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-3 my-8">
            <WhatsCard
              className="p-1"
              title="Easy Setup"
              desc="Get started quickly with our user-friendly setup process."
            >
              <GridBg className="h-3/5 flex items-center justify-center">
                <CogIcon className="w-3/5 h-3/5 text-muted-foreground" />
              </GridBg>
            </WhatsCard>
            <div className="border border-neutral-500/20 hover:border-neutral-500 rounded-lg h-full w-full row-span-2 flex flex-col p-1">
              <div className="w-full h-4/5  rounded-lg  p-5">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-4/5 h-2/5 relative  p-[1px] overflow-hidden">
                    <div className="absolute inset-0">
                      <MovingBorder duration={5000} rx="30%" ry="30%">
                        <div
                          className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
                          )}
                        />
                      </MovingBorder>
                    </div>
                    <div className="w-full h-full  flex items-center relative bg-white">
                      <h1 className="font-bold text-6xl text-primary text-center w-full p-3">
                        BRAX
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full p-5 bg-white">
                <h3 className="text-lg font-bold">Engage and Assess</h3>
                <p className="text-muted-foreground text-sm">
                  Use our tools to engage students and assess their
                  understanding through quizzes, assignments, and interactive
                  activities.
                </p>
              </div>
            </div>
            {/* <WhatsCard
              title="Engage and Assess"
              desc="Use our tools to engage students and assess their understanding through quizzes, assignments, and interactive activities."
            >
              <div className="w-full h-full ">
                <BeamBorder
                  as="div"
                  borderRadius="0"
                  containerClassName="rounded w-full h-full "
                  borderClassName="rounded w-full h-full"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded "
                >
                  <div className="w-full h-full">data</div>
                </BeamBorder>
              </div>
            </WhatsCard> */}
            <WhatsCard
              className="p-1"
              title="Create and Manage Courses"
              desc="Design courses, upload materials, and manage student enrollments with ease."
            >
              <Dotbg className="flex items-center justify-center w-full h-full">
                <img
                  alt="A tree structure of 3D spheres are connected by lines"
                  loading="lazy"
                  width={268}
                  height={212}
                  decoding="async"
                  className="invert-1"
                  src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-dark.png&amp;w=640&amp;q=100"
                  // srcSet="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-dark.png&amp;w=300&amp;q=100 1x, https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-dark.png&amp;w=640&amp;q=100 2x"
                  // className="features_darkMode__90_Sh"
                  // style={{ color: "transparent" }}
                  // unoptimized
                />
              </Dotbg>
            </WhatsCard>
            {WhatsArray?.map((items, i) => (
              <div
                key={`WhatsArray` + i}
                className="border border-neutral-500/20 hover:border-neutral-500 rounded-lg h-full overflow-hidden w-full"
              >
                <div className="w-full p-5 bg-white">
                  <h3 className="text-lg font-bold">{items.title}</h3>
                  <p className="text-muted-foreground text-sm mt-3">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BasicContainer>
      </section>
      <section className="w-full  h-[70vh] flex flex-col ">
        <h1 className="text-center text-4xl font-semibold tracking-tighter my-8">
          Our Popular Work
        </h1>
        <BasicContainer>
          <ExpandableCardDemo cards={coursesArray} />
        </BasicContainer>
      </section>
      <section className="w-full h-[50vh] flex flex-col relative ">
        <BasicContainer className="h-full flex-row  border rounded-lg">
          <div className="  h-full flex-1 gap-6  flex flex-col justify-center ">
            <h1 className="text-4xl font-semibold tracking-tighter ">
              Ready to Transform Your Learning Experience?
            </h1>
            <h3 className="text-lg ">
              Sign up today and see how Brax Learning can make a difference.
            </h3>
            <div className="flex gap-4 items-center">
              <Button variant="outline">Start Your Free Trial</Button>
              <Button variant="flat">Schedule a Demo</Button>
            </div>
          </div>
          <div className=" h-full flex flex-col justify-center flex-1">
            <div className="h-3/5 flex">
              {FeaturesArray.slice(0, 3).map((items, i) => (
                <div
                  key={"FeaturesArray" + i + "slice"}
                  onMouseEnter={() => setHoverCards(true)}
                  onMouseLeave={() => setHoverCards(false)}
                  className={cn(
                    "rounded-lg border h-full w-1/2 min-w-[50%]  overflow-hidden transition-all duration-1000 scale-1 ease-out  ",
                    translateY[i as keyof typeof translateY],
                    translateX[i as keyof typeof translateX],
                    rotate[i as keyof typeof rotate],
                    hoverCards && rotateHover[i as keyof typeof rotateHover],
                    hoverCards && translateXHover[i as keyof typeof rotateHover]
                  )}
                >
                  <div className="h-2/3 bg-neutral-800 ">
                    <Image
                      src={items.image}
                      alt=""
                      width={590}
                      height={590}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-full bg-white w-full  flex flex-col p-4">
                    <h5 className=" font-semibold text-lg">{items?.title}</h5>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BasicContainer>
      </section>
    </main>
  );
}

// export const rotate = {
//   0: "-rotate-6",
//   1: "-rotate-3",
//   2: "rotate-0",
// };
// export const rotateHover = {
//   0: "-rotate-12",
//   1: "-rotate-6",
//   2: "rotate-3",
// };
// export const translateY = {
//   0: "-translate-y-10",
//   1: "-translate-y-5",
//   2: "-translate-y-0",
// };

// export const translateX = {
//   0: "-translate-x-[0]",
//   1: "-translate-x-[50%]",
//   2: "-translate-x-[100%]",
// };
// export const translateXHover = {
//   2: "scale-[1.2]",
//   1: "scale-[1.4]",
//   0: "scale-[1.6]",
// };

interface IWhatsCard {
  children: ReactNode;
  title: string;
  desc: string;
}
const WhatsCard = ({
  children,
  desc,
  title,
  className,
  ...props
}: IWhatsCard & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "border border-neutral-500/20 cursor-pointer hover:border-neutral-500 rounded-lg h-full w-full row-span-2 flex flex-col overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
      <div className=" w-full p-5 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>
    </div>
  );
};
