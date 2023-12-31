import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between h-[90px] items-center max-sm:hidden">
        <div>
          <a href="/" className="text-[35px]">
            Sevinda.
          </a>
        </div>

        <div className="flex gap-[60px]">
          <Link to="about" smooth className="cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth className="cursor-pointer">
            Projects
          </Link>
          <Link to="contacts" smooth className="cursor-pointer">
            Contact
          </Link>
        </div>
      </div>

      <div className="h-[90px] flex items-center justify-center sm:hidden">
        <p>Portfolio Of</p>
      </div>
    </nav>
  );
};

export default Navbar;
