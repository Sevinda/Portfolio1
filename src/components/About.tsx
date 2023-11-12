import profilePicture from "../assets/profile.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="lg:p-[165px] flex items-center justify-center"
    >
      <img
        src={profilePicture}
        alt="Profile Picture"
        className="max-xl:hidden h-[65vh] w-[30vw] object-cover"
      />
      <div className="xl:ml-[120px]">
        <p className="max-xl:text-center max-xl:text-[22px] text-[24px]">
          I am a highly motivated self-driven undergraduate with three months of
          software engineer intern.
          <br />
          <br />
          Currently reading for my degree in Software Engineering at Westminster
          University. I like solving problems and helping build a better
          tomorrow. I also build user-friendly, minimal user interfaces with new
          technologies which glows up the website
          <br />
          <br />
          <span className="text-[19px] text-[#787878]">
            Well in my spare time, you can catch me at a cafe with my laptop and
            a cup of coffee ☕ :)
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
