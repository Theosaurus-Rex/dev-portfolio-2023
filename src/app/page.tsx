import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col p-16 space-y-10">
      <section className="flex flex-col space-y-4">
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
          experiences. I also have a background in Fine Art, and have
          <Link
            className="ml-2 text-purple-600"
            href="https://dribbble.com/Theosaurus-Rex"
            target="_blank"
          >
            dabbled in the realm of UX/UI design
          </Link>
          - something I would be keen to dive further into if the opportunity
          arises.
        </p>
        <p className="text-lg text-left text-gray-800">
          I'm passionate about accessibility, developer experience (particularly
          documentation) and sharing knowledge with others in the form of blog
          posts and talks. When I'm not working on code, I make art and knit and
          crochet for charity.
        </p>
      </section>
      <section className="flex flex-col space-y-4">
        <h2 className="text-left text-4xl font-bold text-gray-800">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col col-start-1 col-span-1">
            <h3 className="font-semibold text-lg">Front-End Tech</h3>
            <ul className="list-disc ml-4">
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>TailwindCSS</li>
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>NextJS</li>
            </ul>
          </div>
          <div className="flex flex-col md:col-start-2 col-span-1">
            <h3 className="font-semibold text-lg">Back-End Tech</h3>
            <ul className="list-disc ml-4">
              <li>Elixir</li>
              <li>Phoenix (LiveView)</li>
              <li>Ash Framework</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQL/PostgresQL</li>
            </ul>
          </div>
          <div className="flex flex-col md:col-start-3 col-span-1">
            <h3 className="font-semibold text-lg">Tools</h3>
            <ul className="list-disc ml-4">
              <li>Git/GitHub</li>
              <li>VSCode</li>
              <li>Trello/Jira/Notion</li>
              <li>Figma</li>
              <li>Miro</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
