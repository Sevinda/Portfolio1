interface Props {
  projectID: number;
  heading: string;
  description: string;
  image: string;
  github: string;
  link: string;
}

const Project = ({
  projectID,
  heading,
  description,
  image,
  github,
  link,
}: Props) => {
  return (
    <div className="px-[50px] mb-[70px]">
      {projectID % 2 == 0 ? (
        <div className="flex flex-col gap-[110px] lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <a
              href={link}
              target="_blank"
              className="text-[29px] font-bold underline"
            >
              {heading}
            </a>
            <p className="text-center min-w-[300px] max-w-[400px] text-[#787878]">
              {description}
              <br />
              <br />
              <a href={github} target="_blank">
                Intersted? Explore
              </a>
            </p>
          </div>
          <img
            src={image}
            alt={"project" + projectID}
            className="w-[500px] object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-[110px] lg:flex-row justify-center items-center">
          <img
            src={image}
            alt={"project" + projectID}
            className="w-[500px] object-cover"
          />
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <a
              href={link}
              target="_blank"
              className="text-[29px] font-bold underline"
            >
              {heading}
            </a>
            <p className="text-center min-w-[300px] max-w-[400px] text-[#787878]">
              {description}
              <br />
              <br />
              <a href={github} target="_blank">
                Intrested? Explore
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
