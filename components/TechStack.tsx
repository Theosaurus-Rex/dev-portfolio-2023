"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const technologies = [
  { name: "HTML", icon: "/images/tech_icons/html.svg" },
  { name: "CSS", icon: "/images/tech_icons/css.svg" },
  { name: "JavaScript", icon: "/images/tech_icons/javascript.svg" },
  { name: "TypeScript", icon: "/images/tech_icons/typescript.svg" },
  { name: "PostgreSQL", icon: "/images/tech_icons/postgresql.svg" },
  { name: "React", icon: "/images/tech_icons/react.svg" },
  { name: "Next.js", icon: "/images/tech_icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/images/tech_icons/tailwind.svg" },
  { name: "Elixir", icon: "/images/tech_icons/elixir.svg" },
  { name: "Phoenix", icon: "/images/tech_icons/phoenix.svg" },
  // Repeating to fill enough space on larger breakpoints
  { name: "HTML", icon: "/images/tech_icons/html.svg" },
  { name: "CSS", icon: "/images/tech_icons/css.svg" },
  { name: "JavaScript", icon: "/images/tech_icons/javascript.svg" },
  { name: "TypeScript", icon: "/images/tech_icons/typescript.svg" },
  { name: "PostgreSQL", icon: "/images/tech_icons/postgresql.svg" },
  { name: "React", icon: "/images/tech_icons/react.svg" },
  { name: "Next.js", icon: "/images/tech_icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/images/tech_icons/tailwind.svg" },
  { name: "Elixir", icon: "/images/tech_icons/elixir.svg" },
  { name: "Phoenix", icon: "/images/tech_icons/phoenix.svg" },
];

const bgColors = ["bg-blue", "bg-purple", "bg-orange", "bg-pink", "bg-lime"];

const TechStack = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only load Swiper after component mounts on client
    setIsClient(true);
  }, []);

  // Return placeholder until client-side component is ready
  if (!isClient) {
    return (
      <div className="w-full tech-stack-fade flex overflow-x-auto py-4">
        {technologies.slice(0, 6).map((tech, index) => (
          <div
            key={`${tech.name}-static-${index}`}
            className="mx-1 flex-shrink-0"
          >
            <div
              className={`
                w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24
                ${bgColors[index % bgColors.length]}
                border-3 border-black rounded-md p-2
              `}
              aria-label={`${tech.name} icon placeholder`}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full tech-stack-fade">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        breakpoints={{
          // md breakpoint (768px)
          768: {
            slidesPerView: 7,
          },
          // lg breakpoint (1024px)
          1024: {
            slidesPerView: 10,
          },
        }}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 1000, // Delay start to improve initial load
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        className="mySwiper"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={`${tech.name}-${index}`}>
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              width={60}
              height={60}
              loading="lazy"
              className={`
                w-16 h-16 md:w-24 md:h-24 lg:w-24 lg:h-24
                ${bgColors[index % bgColors.length]}
                border-3 border-black rounded-md p-2
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TechStack;
