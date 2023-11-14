interface Props {
  projectID: number;
  image: string;
}

const Image = ({ projectID, image }: Props) => {
  return (
    <img
      src={image}
      alt={"project" + projectID}
      className="w-[500px] object-cover lg:px-7"
    />
  );
};

export default Image;
