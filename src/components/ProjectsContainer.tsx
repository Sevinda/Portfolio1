import Project from "./Project";

const ProjectsContainer = () => {
  return (
    <div id="projects">
      <div className="py-[200px]">
        <h2 className="max-sm:px-[20px] text-[80px] lg:text-[165px] xl:text-[210px] font-extrabold text-center">
          Few Projects
        </h2>
      </div>

      <Project projectID={0} />
      <Project projectID={1} />
    </div>
  );
};

export default ProjectsContainer;
