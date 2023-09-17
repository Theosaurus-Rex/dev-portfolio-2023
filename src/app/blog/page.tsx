import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";

const BlogIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </div>
  );
};

export default BlogIndex;
