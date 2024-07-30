"use client";
import { motion } from "framer-motion";
import BasicContainer from "@/components/BasicContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Marqueez from "@/components/Marqueez";
import { describe } from "node:test";
import { DialogDescription } from "@/components/ui/dialog";
import { FC } from "react";
import { FeatureCard } from "@/components/FeatureCard";

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

  const FeatureComponentArray = FeaturesArray?.map((items, i) => (
    <FeatureCard key={i} {...items} />
  ));

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
      <section className="w-full my-10 h-screen flex flex-col">
        <div className="w-full  flex justify-center gap-4 items-end">
          <h1 className="font-semibold text-4xl tracking-tighter">
            How does BRAX Learning Works?
          </h1>
          <h3 className="text-lg font-[500] text-muted-foreground">
            Everything you need to know about BRAX Learning
          </h3>
        </div>
        <BasicContainer>
          <div className="w-[8rem] h-[8rem]">
            <div className=" inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
              hello
            </div>
          </div>
        </BasicContainer>
      </section>
    </main>
  );
}
