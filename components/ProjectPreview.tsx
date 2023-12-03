import { ProjectMetadata } from "./ProjectMetadata";

const ProjectPreview = (props: ProjectMetadata) => {
  return (
    <div
      key={props.slug}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          src={props.imageSrc}
          alt={props.name}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900">
            {props.name}
          </h3>
          <p className="mt-5 text-xl leading-6 text-gray-600">
            {props.description}
          </p>
          <div className="flex flex-row space-x-4 mt-4">
            <a
              href={props.liveUrl}
              className="inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
              View Live
            </a>
            <a
              href={props.githubUrl}
              className="inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
