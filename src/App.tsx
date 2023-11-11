import About from "./components/About";
import Career from "./components/Career";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  return (
    <div>
      <header className="px-[60px]">
        <Navbar />
      </header>

      <Hero />

      <section className="px-[60px]">
        <About />
      </section>

      <section>
        <Career />
      </section>

      <section className="px-[60px]">
        <ProjectsContainer />
      </section>
    </div>
  );
};

export default App;
