"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";
import Pill from "../../components/Pill";

// Lazy load TechStack component
const TechStack = lazy(() => import("../../components/TechStack"));

export default function Home() {
  return (
    <main className="flex flex-col pt-4 bg-cream min-h-screen lg:px-24">
      <section>
        <h1 className="sr-only">
          'Sup, I'm Theo, a web developer based out of Sydney, NSW.
        </h1>
        <div className="lg:hidden">
          <Image
            src="/images/Header.png"
            alt="'Sup, I'm Theo, a web developer based out of Sydney, NSW."
            width={946}
            height={819}
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 0vw"
            quality={85}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/HeaderDesktop.png"
            alt="'Sup, I'm Theo, and I work as a web developer based in Sydney"
            width={3500}
            height={1774}
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 100vw, 0vw"
            quality={85}
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-x-4 lg:space-y-0 p-4 lg:items-stretch">
        <div className="bg-blue p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
          <p className="font-kanit font-bold lg:font-semibold md:text-xl lg:text-2xl xl:text-4xl">
            I've been a full stack developer and technical consultant for 3+
            years, and I have a passion for the web as a storytelling medium.
          </p>
        </div>
        <div className="bg-pink p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
          <p className="font-kanit font-bold lg:font-semibold md:text-xl lg:text-2xl xl:text-4xl">
            I care deeply about equal access to the web for everyone, and work
            hard to create digital experiences that are both accessible and
            enjoyable.
          </p>
        </div>
      </section>
      <section>
        <div className="flex items-center w-full">
          <h2 className="font-climate-crisis text-orange uppercase font-bold text-4xl md:text-6xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet tracking-wider">
            Stack
          </h2>
          <hr className="border md:border-2 border-black w-full" />
        </div>
        <Suspense
          fallback={
            <div className="h-24 bg-gray-100 rounded animate-pulse"></div>
          }
        >
          <TechStack />
        </Suspense>
      </section>
      <section>
        <div className="flex items-center w-full">
          <h2 className="font-climate-crisis text-blue uppercase font-bold text-4xl md:text-6xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet tracking-wider">
            Work
          </h2>
          <hr className="border md:border-2 border-black w-full" />
        </div>
        <div className="m-4 mt-0 flex flex-col xl:flex-row gap-4">
          <div className="bg-purple p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
            <h3 className="text-2xl font-bold uppercase italic">
              Full Stack Developer
            </h3>
            <p className="font-bold italic">@ Alembic, 2022 - Present</p>
            <p className="font-medium">
              Developed several rapid prototypes in small, agile teams for
              greenfield projects across several different business domains,
              including education, natural resources, and automotive services.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Pill text="JavaScript" />
              <Pill text="React" />
              <Pill text="Elixir" />
              <Pill text="Phoenix" />
              <Pill text="LiveView" />
              <Pill text="Tailwind" />
              <Pill text="Ash" />
            </div>
          </div>
          <div className="bg-pink p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
            <h3 className="text-2xl font-bold uppercase italic">
              M365 Developer
            </h3>
            <p className="font-bold italic">@ Engage Squared, 2021 - 2022</p>
            <p className="font-medium">
              Worked in project teams alongside consultants to deliver solutions
              across various Microsoft ecosystem platforms, including
              SharePoint, MS Teams and Power Automate Flow.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Pill text="JavaScript" />
              <Pill text="React" />
              <Pill text="SPFx" />
              <Pill text="Power Automate" />
            </div>
          </div>
          <div className="bg-orange p-4 border-4 border-black rounded-md lg:flex-1 lg:p-4">
            <h3 className="text-2xl font-bold uppercase italic">
              Web Developer
            </h3>
            <p className="font-bold italic">
              @ RedHill Education, JUL - AUG 2021
            </p>
            <p className="font-medium">
              Over the course of 3 weeks, rebuilt the existing staff intranet
              using Google Pages. Delivered technical documentation to ensure
              smooth handover of the implemented solution to the internal staff
              at RedHill after my contract was completed.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Pill text="HTML" />
              <Pill text="CSS" />
              <Pill text="Google Pages" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
