import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const bgColors = ["bg-blue", "bg-purple", "bg-pink", "bg-orange", "bg-lime"];

interface PostPreviewProps extends PostMetadata {
  index: number;
}

const PostPreview = (props: PostPreviewProps) => {
  const bgColor = bgColors[props.index % bgColors.length];

  return (
    <Link href={`/blog/posts/${props.slug}`} className="h-full block">
      <article
        key={props.slug}
        className={`flex flex-col items-start ${bgColor} p-6 border-4 border-black rounded-md h-full`}
      >
        <img
          src={props.imageUrl || ""}
          alt=""
          className="aspect-16/9 w-full object-cover grayscale sm:aspect-2/1 lg:aspect-3/2 rounded-md border-4 border-black"
        />

        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-sm">
            <time className="uppercase font-bold italic">
              {new Date(props.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="group relative">
            <h2 className="mt-3 text-xl font-semibold leading-6 group-hover:underline">
              <span className="absolute inset-0" />
              {props.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-md leading-6">
              {props.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostPreview;
