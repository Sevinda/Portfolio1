import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  return (
    <div className=" px-[60px]">
      <Navbar />
      <Hero />
      <About />
      <ProjectsContainer />
    </div>
  );
};

export default App;
