import Link from "next/link";
import Pill from "../../components/Pill";
export default function Home() {
  return (
    <main className="flex flex-col p-16 space-y-10">
      <section className="flex flex-col space-y-4">
        <h1
          className="text-left text-6xl font-bold text-gray-800"
          aria-label="I'm Theo, a Full Stack Developer from Sydney, Australia."
        >
          I'm Theo, a{" "}
          <span className="text-purple-600">Full Stack Developer</span> from
          Sydney, Australia.
        </h1>
        <p className="text-lg text-left text-gray-800">
          I've been a technical consultant for the last three years, where I've
          had the opportunity to work on a broad range of greenfield projects.
          Industries I've developed solutions for include natural resources,
          education, and the automotive industry.
        </p>
        <p className="text-lg text-left text-gray-800">
          Currently I work as a Technical Consultant and Full-Stack Developer at
          <Link
            className="ml-2 text-purple-600 underline hover:text-black"
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
            className="ml-2 text-purple-600 underline hover:text-black"
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
              <li>Storybook</li>
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
              <li>Prismic CMS</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-4">
        <h2 className="text-left text-4xl font-bold text-gray-800">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 text-lg">
          <div className="col-start-1 col-span-1 uppercase text-sm font-semibold mt-1 text-purple-600">
            Jan 2022 - Present
          </div>
          <div className="md:col-start-2 col-span-1 flex flex-col space-y-2">
            <h3 className="font-semibold">Full Stack Developer @ Alembic</h3>
            <p className="text-base">
              Developed several rapid prototypes in small, agile teams for
              greenfield projects across several different business domains,
              including education, natural resources, and automotive services.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill text="Elixir" />
              <Pill text="Phoenix LiveView" />
              <Pill text="Ash Framework" />
              <Pill text="React" />
              <Pill text="Tailwind CSS" />
            </div>
          </div>
          <div className="col-start-1 col-span-1 uppercase text-sm font-semibold mt-1 text-purple-600">
            Aug 2021 - Jan 2022
          </div>
          <div className="md:col-start-2 col-span-1 flex flex-col space-y-2">
            <h3 className="font-semibold">M365 Developer @ Engage Squared</h3>
            <p className="text-base">
              Worked in project teams alongside consultants to deliver solutions
              across various Microsoft ecosystem platforms, including
              SharePoint, MS Teams and Power Automate Flow.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill text="React" />
              <Pill text="SPFx" />
            </div>
          </div>
          <div className="col-start-1 col-span-1 uppercase text-sm font-semibold mt-1 text-purple-600">
            July 2021 - Aug 2021
          </div>
          <div className="md:col-start-2 col-span-1 flex flex-col space-y-2">
            <h3 className="font-semibold">Contractor @ RedHill Education</h3>
            <p className="text-base">
              Over the course of 3 weeks, rebuilt the existing staff intranet
              using Google Pages. Delivered technical documentation to ensure
              smooth handover of the implemented solution to the internal staff
              at RedHill after my contract was completed.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill text="HTML" />
              <Pill text="CSS" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
