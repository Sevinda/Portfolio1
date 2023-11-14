import Image from "./ProjectSection/Image";
import Text from "./ProjectSection/Text";

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
        <div className="flex flex-col gap-[150px] lg:flex-row justify-center items-center">
          <Text
            link={link}
            heading={heading}
            description={description}
            github={github}
          />
          <Image projectID={projectID} image={image} />
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-[150px] lg:flex-row justify-center items-center">
          <Image projectID={projectID} image={image} />
          <Text
            link={link}
            heading={heading}
            description={description}
            github={github}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
