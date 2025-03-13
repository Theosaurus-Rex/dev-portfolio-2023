import getWeekNoteMetadata from "../../../components/getWeekNoteMetadata";
import WeekNotePreview from "../../../components/WeekNotePreview";

const WeekNotesIndex = () => {
  const weekNoteMetadata = getWeekNoteMetadata();
  const weekNotePreviews = weekNoteMetadata.map((weeknote) => (
    <WeekNotePreview key={weeknote.slug} {...weeknote} />
  ));

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold text-gray-800 text-center my-8">
        Weeknotes
      </h1>
      <ul className="flex flex-col">{weekNotePreviews}</ul>
    </div>
  );
};

export default WeekNotesIndex;
