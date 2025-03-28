import getWeekNoteMetadata from "../../../components/getWeekNoteMetadata";
import WeekNotePreview from "../../../components/WeekNotePreview";

const WeekNotesIndex = () => {
  const weekNoteMetadata = getWeekNoteMetadata();
  const weekNotePreviews = weekNoteMetadata.map((weeknote) => (
    <WeekNotePreview key={weeknote.slug} {...weeknote} />
  ));

  return (
    <div className="flex flex-col">
      <h1 className="font-climate-crisis text-purple uppercase font-bold text-6xl lg:text-8xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet lg:text-outline-desktop tracking-wider text-center">
        Weeknotes
      </h1>
      <ul className="flex flex-col">{weekNotePreviews}</ul>
    </div>
  );
};

export default WeekNotesIndex;
