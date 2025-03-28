import getPostMetadata from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";

const BlogIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} index={index} />
  ));

  return (
    <div className="flex flex-col bg-cream">
      <h1 className="font-climate-crisis text-orange uppercase font-bold text-6xl lg:text-8xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet lg:text-outline-desktop tracking-wider text-center">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mb-10">
        {postPreviews}
      </div>
    </div>
  );
};

export default BlogIndex;
