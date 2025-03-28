import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getWeekNoteMetadata from "../../../../components/getWeekNoteMetadata";

const getWeekNoteContent = async (slug: string) => {
  const folder = "weeknotes/";
  const file = `${folder}${slug}.md`;
  const content = await fs.promises.readFile(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const weeknotes = getWeekNoteMetadata();
  return weeknotes.map((weeknote) => ({
    slug: weeknote.slug,
  }));
};

const WeekNotePage = async (props: any) => {
  const params = await props.params;
  const slug = params.slug;
  const weeknote = await getWeekNoteContent(slug);

  return (
    <div>
      <article className="prose lg:prose-xl pt-12 mx-auto">
        <Markdown>{weeknote.content}</Markdown>
      </article>
    </div>
  );
};

export default WeekNotePage;
