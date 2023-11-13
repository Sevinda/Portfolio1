import project1 from "../assets/Gojo.jpg";

interface Props {
  projectID: number;
}

const Project = ({ projectID }: Props) => {
  return (
    <div className="px-[50px]">
      {projectID % 2 == 0 ? (
        <div className="flex flex-col gap-[50px] lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <h3>RAWG</h3>
            <p className="text-center min-w-[300px] max-w-[400px]">
              Built a front-end web application using react typescript. All of
              the data is fetched using an API, and displayed on the website
            </p>
          </div>
          <img
            src={project1}
            alt={"project" + projectID}
            className="w-[500px] object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-[50px] lg:flex-row justify-center items-center">
          <img
            src={project1}
            alt={"project" + projectID}
            className="w-[500px] object-cover"
          />
          <div className="flex flex-col-reverse justify-center items-center gap-[20px]">
            <h3>RAWG</h3>
            <p className="text-center min-w-[300px] max-w-[400px]">
              Built a front-end web application using react typescript. All of
              the data is fetched using an API, and displayed on the website
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
