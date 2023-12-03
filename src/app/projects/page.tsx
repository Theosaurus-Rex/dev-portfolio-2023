import getProjectMetadata from "../../../components/getProjectMetadata";
import ProjectPreview from "../../../components/ProjectPreview";

const ProjectsIndex = () => {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold text-gray-800 text-center my-8">
        Projects
      </h1>
      <div className="flex flex-col gap-6">{projectPreviews}</div>
    </div>
  );
};

export default ProjectsIndex;
