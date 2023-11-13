const ContactBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[100px] lg:justify-between lg:px-[100px]">
      <h2 className="mb-7 text-center lg:w-[500px] lg:text-left lg:text-[50px] font-bold">
        Lets start building wonders ✨
      </h2>

      <button className="bg-[#a0a0a0] text-[#1e1e1e] font-extrabold text-[30px] w-[270px] h-[55px] rounded-full hover:scale-[1.1] ease-linear duration-[150ms]">
        Contact me
      </button>
    </div>
  );
};

export default ContactBtn;
