import { TalkMetadata } from "./TalkMetadata";
import fs from "fs";
import matter from "gray-matter";

const getTalkMetadata = (): TalkMetadata[] => {
  const folder = "talks/";
  const files = fs.readdirSync(folder);
  const markdownTalkSummaries = files.filter((file) => file.endsWith(".md"));

  // Get front-matter for each post
  const talks = markdownTalkSummaries.map((fileName) => {
    const fileContents = fs.readFileSync(`talks/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      videoUrl: matterResult.data.videoUrl,
      slug: fileName.replace(".md", ""),
    };
  });

  talks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return talks;
};

export default getTalkMetadata;
