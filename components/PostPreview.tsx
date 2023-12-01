import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <article key={props.slug} className="flex flex-col items-start ">
      <div className="relative w-full">
        <img
          src={props.imageUrl || ""}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-sm">
          <time className="text-gray-500">
            {new Date(props.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-purple-600">
            <a href={`/blog/posts/${props.slug}`}>
              <span className="absolute inset-0" />
              {props.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-600">
            {props.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
