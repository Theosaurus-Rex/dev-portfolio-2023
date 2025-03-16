import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col  pt-4 bg-cream min-h-screen">
      <section className="flex-1">
        <h1 className="sr-only">
          'Sup, I'm Theo, a web developer based out of Sydney, NSW.
        </h1>
        <Image
          src="/images/Header.png"
          alt="'Sup, I'm Theo, a web developer based out of Sydney, NSW."
          width="946"
          height="819"
          className="lg:hidden"
        />
        <div className="hidden lg:block mx-24">
          <Image
            src="/images/HeaderDesktop.png"
            alt="'Sup, I'm Theo, and I work as a web developer based in Sydney"
            width="3500"
            height="1774"
          />
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-between space-y-4 p-4">
        <div className="bg-blue p-4 border-4 border-black rounded-md flex-1">
          <p className="font-kanit font-bold md:text-xl">
            I've been a full stack developer and technical consultant for 3+
            years, and I have a passion for the web as a storytelling medium.
          </p>
        </div>
        <div className="bg-pink p-4 border-4 border-black rounded-md flex-1">
          <p className="font-kanit font-bold md:text-xl">
            I care deeply about equal access to the web for everyone, and work
            hard to create digital experiences that are both accessible and
            enjoyable.
          </p>
        </div>
      </section>
    </main>
  );
}
