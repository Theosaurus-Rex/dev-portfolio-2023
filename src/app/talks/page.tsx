import getTalkMetadata from "../../../components/getTalkMetadata";
import TalkPreview from "../../../components/TalkPreview";

const TalksIndex = () => {
  const talkMetadata = getTalkMetadata();
  const talkPreviews = talkMetadata.map((talk) => (
    <TalkPreview key={talk.slug} {...talk} />
  ));

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center">Talks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {talkPreviews}
      </div>
    </div>
  );
};

export default TalksIndex;
