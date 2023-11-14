import Project from "./Project";

const ProjectsContainer = () => {
  return (
    <div id="projects">
      <div className="py-[200px]">
        <h2 className="max-sm:px-[20px] text-[80px] lg:text-[165px] xl:text-[210px] font-extrabold text-center">
          Few Projects
        </h2>
      </div>

      <Project
        projectID={0}
        heading="RAWG"
        description="Built a front-end web application using react typescript. All of the data is fetched using an API, and displayed on the website"
        github="https://github.com/Sevinda/gamehubMosh"
        image="/Gojo.jpg"
        link="https://game-hub-three-indol.vercel.app/"
      />
      <Project
        projectID={1}
        heading="Hadamu"
        description="Build a newspaper website using the MERN Stack. All of the data displayed is fetched a database i created using mongoDB."
        image="/Gojo.jpg"
        github="https://github.com/Sevinda/hadamu/"
        link="https://hadamu.netlify.app/"
      />
      <Project
        projectID={2}
        heading="3D website"
        description="Built a front-end 3d website using react and spline where you can rotate the 3d object as you wish with the mouse."
        image="/Gojo.jpg"
        github="https://github.com/Sevinda/Spline-React-1"
        link="https://scp-spline3d.netlify.app/"
      />

      <p className="mt-[200px] px-[20px] text-center text-[33px] font-semibold">
        And many more coming up soon!
      </p>
      <p className="mt-[25px] px-[20px] text-center text-[27px] text-[#787878]">
        Watch my contributions on
      </p>
      <a href="https://github.com/sevinda" className="flex justify-center items-center font-bold mt-[50px] text-[120px] md:text-[200px] lg:text-[260px]">GitHub</a>
    </div>
  );
};

export default ProjectsContainer;
