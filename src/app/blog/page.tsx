import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { PostMetadata } from "../../../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get front-matter for each post
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const BlogIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div key={post.slug}>
      <Link href={`/blog/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default BlogIndex;
