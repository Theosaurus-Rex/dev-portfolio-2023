import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getTalkMetadata from "../../../../../components/getTalkMetadata";

const getTalkContent = (slug: string) => {
  const folder = "talks/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const talks = getTalkMetadata();
  return talks.map((talk) => ({
    slug: talk.slug,
  }));
};

const TalkPage = (props: any) => {
  const slug = props.params.slug;
  const talk = getTalkContent(slug);

  return (
    <div className="flex flex-col items-center">
      <div className="my-12 text-center">
        <h1 className="text-4xl text-gray-900 font-bold">{talk.data.title}</h1>
        <p className="text-gray-400 mt-4 text-xl">
          {new Date(talk.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <iframe
        width="540"
        height="315"
        src={talk.data.videoUrl}
        title={talk.data.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <article className="prose lg:prose-xl">
        <Markdown>{talk.content}</Markdown>
      </article>
    </div>
  );
};

export default TalkPage;
