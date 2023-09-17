import Link from "next/link";
import { TalkMetadata } from "./TalkMetadata";

const TalkPreview = (props: TalkMetadata) => {
  return (
    <div
      key={props.slug}
      className="border border-slate-200 p-4 rounded-md shadow-md bg-white"
    >
      <Link href={`/talks/talks/${props.slug}`}>
        <h2 className="font-bold text-slate-600 hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm text-slate-400">
        {new Date(props.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="text-slate-700">{props.description}</p>
    </div>
  );
};

export default TalkPreview;
