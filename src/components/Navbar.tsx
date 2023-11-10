const Navbar = () => {
  return (
    <div className="flex justify-between h-[90px] items-center">
      <div>
        <h1>Portfolio</h1>
      </div>

      <div className="flex gap-[90px]">
        <a href="#about">About</a>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
