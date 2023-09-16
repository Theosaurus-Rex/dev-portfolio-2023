import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center text-6xl font-bold text-slate-800">
          Welcome!
        </h1>
        <p className="text-center text-slate-800">
          My name is Theo Harris. I'm a web developer based in NSW, Australia. I
          have experience working on a broad range of greenfield projects across
          several industries, including natural resources, education, and the
          automotive industry.
        </p>
        <p className="text-center text-slate-800">
          Currently I work as a Technical Consultant and Full-Stack Developer at
          <Link
            className="ml-2 underline"
            href="https://alembic.com.au/"
            target="_blank"
          >
            Alembic
          </Link>
          , a Sydney-based consultancy specialising in Elixir, Phoenix, LiveView
          and the Ash Framework.
        </p>
        <p className="text-center text-slate-800">
          I'm passionate about accessibility, developer experience (particularly
          documentation) and sharing knowledge with others in the form of blog
          posts and talks. When I'm not working on code, I
          <Link
            className="ml-2  underline"
            href="https://www.instagram.com/theosaurus_art/?hl=en"
            target="_blank"
          >
            make art
          </Link>{" "}
          and knit and crochet for charity.
        </p>
      </div>
    </main>
  );
}
