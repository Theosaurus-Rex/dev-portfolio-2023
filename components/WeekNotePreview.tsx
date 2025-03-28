import Link from "next/link";
import { WeekNoteMetadata } from "./WeekNoteMetadata";

const formatDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return `${startDate.toLocaleDateString(
    "en-GB",
    options
  )} - ${endDate.toLocaleDateString("en-GB", options)}`;
};

const WeekNotePreview = (props: WeekNoteMetadata) => {
  const dateRange = formatDateRange(props.weekStart, props.weekEnd);

  return (
    <li>
      <Link href={`/weeknotes/${props.slug}`}>
        <h2 className="w-full text-center font-bold text-2xl underline hover:text-purple mb-4">
          {dateRange}
        </h2>
      </Link>
    </li>
  );
};

export default WeekNotePreview;
