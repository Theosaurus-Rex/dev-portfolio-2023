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
        Week Notes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {weekNotePreviews}
      </div>
    </div>
  );
};

export default WeekNotesIndex;
