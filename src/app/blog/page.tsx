import Link from "next/link";
import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";

const BlogIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default BlogIndex;
