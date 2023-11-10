const Navbar = () => {
  return (
    <>
      <div className="flex justify-between h-[90px] items-center max-sm:hidden">
        <div>
          <a href="/" className="text-[35px]">
            Sevinda
          </a>
        </div>

        <div className="flex gap-[60px]">
          <a href="#about">About</a>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="h-[90px] flex items-center justify-center sm:hidden">
        <p>Portfolio Of</p>
      </div>
    </>
  );
};

export default Navbar;
