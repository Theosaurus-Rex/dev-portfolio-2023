import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getWeekNoteMetadata from "../../../../components/getWeekNoteMetadata";

const formatDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return `${startDate.toLocaleDateString(
    "en-GB",
    options
  )} - ${endDate.toLocaleDateString("en-GB", options)}`;
};

const getWeekNoteContent = (slug: string) => {
  const folder = "weeknotes/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const weeknotes = getWeekNoteMetadata();
  return weeknotes.map((weeknote) => ({
    slug: weeknote.slug,
  }));
};

const WeekNotePage = (props: any) => {
  const slug = props.params.slug;
  const weeknote = getWeekNoteContent(slug);
  const dateRange = formatDateRange(
    weeknote.data.weekStart,
    weeknote.data.weekEnd
  );

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-4xl text-gray-900 font-bold">{dateRange}</h1>
      </div>

      <article className="prose lg:prose-xl">
        <Markdown>{weeknote.content}</Markdown>
      </article>
    </div>
  );
};

export default WeekNotePage;
