import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";

const BlogIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold text-gray-800 text-center my-8">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postPreviews}
      </div>
    </div>
  );
};

export default BlogIndex;
