import Link from "next/link";
import { TalkMetadata } from "./TalkMetadata";

const TalkPreview = (props: TalkMetadata) => {
  return (
    <div className="pb-8">
      <div className="pt-8 flex items-center gap-x-4 text-sm">
        <time className="uppercase font-bold italic">
          {new Date(props.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div className="group relative">
        <h2 className="mt-3 text-xl font-semibold leading-6 underline group-hover:text-pink">
          <a href={`/talks/talks/${props.slug}`}>
            <span className="absolute inset-0" />
            {props.title}
          </a>
        </h2>
        <p className="mt-5 line-clamp-3 text-md leading-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default TalkPreview;
