import getTalkMetadata from "../../../components/getTalkMetadata";
import TalkPreview from "../../../components/TalkPreview";

const TalksIndex = () => {
  const talkMetadata = getTalkMetadata();
  const talkPreviews = talkMetadata.map((talk) => (
    <TalkPreview key={talk.slug} {...talk} />
  ));

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold text-gray-800 text-center my-8">
        Talks
      </h1>
      <div className="flex flex-col divide-y gap-4">{talkPreviews}</div>
    </div>
  );
};

export default TalksIndex;
