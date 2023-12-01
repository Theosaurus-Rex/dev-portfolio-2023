import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <div className="mx-auto max-w-7xl">
          <img
            src={post.data.imageUrl}
            className="w-full max-h-96 rounded-2xl bg-gray-100 object-cover mb-6"
          />
        </div>
        <h1 className="text-4xl text-gray-900 font-bold">{post.data.title}</h1>
        <p className="text-gray-400 mt-4 text-xl">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
