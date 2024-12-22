import Link from "next/link";
import { TalkMetadata } from "./TalkMetadata";

const TalkPreview = (props: TalkMetadata) => {
  return (
    <div>
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
        <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-purple-600">
          <a href={`/talks/talks/${props.slug}`}>
            <span className="absolute inset-0" />
            {props.title}
          </a>
        </h2>
        <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-600">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default TalkPreview;
