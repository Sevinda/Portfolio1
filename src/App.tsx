import About from "./components/About";
import Career from "./components/Career";
import ContactBtn from "./components/ContactBtn";
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
        <ContactBtn />
      </section>

      <section>
        <ProjectsContainer />
      </section>
    </div>
  );
};

export default App;
