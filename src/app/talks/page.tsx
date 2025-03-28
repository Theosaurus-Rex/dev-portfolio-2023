import getTalkMetadata from "../../../components/getTalkMetadata";
import TalkPreview from "../../../components/TalkPreview";

const TalksIndex = () => {
  const talkMetadata = getTalkMetadata();
  const talkPreviews = talkMetadata.map((talk) => (
    <TalkPreview key={talk.slug} {...talk} />
  ));

  return (
    <div className="flex flex-col bg-cream px-10 xl:px-90">
      <h1 className="font-climate-crisis text-pink uppercase font-bold text-6xl lg:text-8xl m-4 lg:my-8 lg:mx-0 text-outline-mobile md:text-outline-tablet lg:text-outline-desktop tracking-wider text-center">
        Talks
      </h1>
      <div className="flex flex-col divide-y-4 divide-black gap-4">
        {talkPreviews}
      </div>
    </div>
  );
};

export default TalksIndex;
