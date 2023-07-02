import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`/blog/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default PostPreview;
