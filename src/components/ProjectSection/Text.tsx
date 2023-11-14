interface Props {
  link: string;
  heading: string;
  description: string;
  github: string;
}

const Text = ({ link, heading, description, github }: Props) => {
  return (
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
  );
};

export default Text;
