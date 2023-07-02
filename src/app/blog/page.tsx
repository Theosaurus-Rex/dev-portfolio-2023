import Link from "next/link";
import getPostMetadata from "../../../components/getPostMetadata";

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
