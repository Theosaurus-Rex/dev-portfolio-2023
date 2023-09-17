import getTalkMetadata from "../../../components/getTalkMetadata";
import TalkPreview from "../../../components/TalkPreview";

const TalksIndex = () => {
  const talkMetadata = getTalkMetadata();
  const talkPreviews = talkMetadata.map((talk) => (
    <TalkPreview key={talk.slug} {...talk} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{talkPreviews}</div>
  );
};

export default TalksIndex;
