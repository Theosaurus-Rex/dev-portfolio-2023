import Link from "next/link";
export default function Home() {
  return (
    <main className="flex  flex-col items-center p-16">
      <div className="flex flex-col space-y-4">
        <h1 className="text-left text-6xl font-bold text-gray-800">
          I'm Theo, a{" "}
          <span className="text-purple-600">Full Stack Developer</span> from
          Sydney, Australia.
        </h1>
        <p className="text-lg text-left text-gray-800">
          I've been a technical consultant for the last three years, where I've
          had the opportunity to work on broad range of greenfield projects.
          Industries I've developed solutions for include natural resources,
          education, and the automotive industry.
        </p>
        <p className="text-lg text-left text-gray-800">
          Currently I work as a Technical Consultant and Full-Stack Developer at
          <Link
            className="ml-2 text-purple-600"
            href="https://alembic.com.au/"
            target="_blank"
          >
            Alembic
          </Link>
          , a Sydney-based consultancy specialising in Elixir, Phoenix, LiveView
          and the Ash Framework.
        </p>
        <p className="text-lg text-left text-gray-800">
          While I'm a Full Stack Developer by trade, I lean more towards Front
          End Development and enjoy building clean and intuitive user
          experiences. I also have a background in Fine Art, and have{" "}
          <Link
            className="ml-2 text-purple-600"
            href="https://dribbble.com/Theosaurus-Rex"
            target="_blank"
          >
            dabbled in the realm of UX/UI design
          </Link>{" "}
          - something I would be keen to dive further into if the opportunity
          arises.
        </p>
        <p className="text-lg text-left text-gray-800">
          I'm passionate about accessibility, developer experience (particularly
          documentation) and sharing knowledge with others in the form of blog
          posts and talks. When I'm not working on code, I make art and knit and
          crochet for charity.
        </p>
      </div>
    </main>
  );
}
