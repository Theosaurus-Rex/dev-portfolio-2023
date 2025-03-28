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

const PostPage = async (props: any) => {
  const params = await props.params;
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div className="bg-cream pb-12">
      <div className="p-12 pb-0 text-center">
        <div className="mx-auto max-w-7xl">
          <img
            src={post.data.imageUrl}
            className="w-full max-h-96 rounded-2xl object-cover mb-6 border-4 border-black"
          />
        </div>
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <p className="font-bold uppercase italic mt-4 text-xl">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <article className="prose lg:prose-xl w-full mx-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
