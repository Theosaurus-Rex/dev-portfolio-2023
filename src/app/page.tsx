import Image from "next/image";
import TechStack from "../../components/TechStack";
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
            width="946"
            height="819"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/HeaderDesktop.png"
            alt="'Sup, I'm Theo, and I work as a web developer based in Sydney"
            width="3500"
            height="1774"
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
      <div className="flex items-center w-full">
        <h2 className="font-climate-crisis text-orange uppercase font-bold text-4xl md:text-6xl m-4 text-outline-mobile md:text-outline-tablet tracking-wider">
          Stack
        </h2>
        <hr className="border md:border-2 border-black w-full" />
      </div>
      <TechStack />
    </main>
  );
}
