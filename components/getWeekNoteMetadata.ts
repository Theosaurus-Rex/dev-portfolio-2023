import { WeekNoteMetadata } from "./WeekNoteMetadata";
import fs from "fs";
import matter from "gray-matter";

const getWeekNoteMetadata = (): WeekNoteMetadata[] => {
  const folder = "weeknotes/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const weeknotes = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`weeknotes/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      weekStart: matterResult.data.weekStart,
      weekEnd: matterResult.data.weekEnd,
      slug: fileName.replace(".md", ""),
    };
  });

  weeknotes.sort(
    (a, b) => new Date(b.weekStart).getTime() - new Date(a.weekStart).getTime()
  );
  return weeknotes;
};

export default getWeekNoteMetadata;
