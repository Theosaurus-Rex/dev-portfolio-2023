import { ProjectMetadata } from "./ProjectMetadata";
import fs from "fs";
import matter from "gray-matter";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  // Get front-matter for each project
  // Not using this right now but eventually would like to have a rich text description for each project to detail implementation, learnings etc
  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      name: matterResult.data.name,
      description: matterResult.data.description,
      githubUrl: matterResult.data.githubUrl,
      liveUrl: matterResult.data.liveUrl,
      slug: fileName.replace(".md", ""),
      imageSrc: matterResult.data.imageSrc,
    };
  });

  return projects;
};

export default getProjectMetadata;
