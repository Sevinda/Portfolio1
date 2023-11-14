const Contact = () => {
  const links = [
    {
      link: "https://www.instagram.com/_sevi___/",
      name: "Instagram",
    },
    {
      link: "https://www.linkedin.com/in/sevinda-perera/",
      name: "LinkedIn",
    },
    {
      link: "https://web.facebook.com/profile.php?id=100086026496976",
      name: "Facebook",
    },
    {
      link: "https://twitter.com/Sevinda8",
      name: "Twitter",
    },
  ];
  return (
    <>
      <div id="contacts" className="text-center flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:text-left lg:mb-[0px] mb-[35px]">
          <p className="font-semibold text-[33px]  lg:w-[400px] mb-[10px]">
            I'd love some occasional hello's 👋
          </p>
          <p className="text-[#787878] text-[21px]">
            For offers contact me through my email
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center md:w-[300px] lg:ml-[350px] gap-x-[80px] gap-y-[20px]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-[25px] text-[#787878]"
              target="_blank"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <a
        href="mailto:sevindacharukaperera@gmail.com"
        className="mt-[50px] lg:mt-[150px] flex justify-center items-center font-bold text-[25px] md:text-[35px] lg:text-[40px]"
      >
        sevindacharukaperera@gmail.com
      </a>

      <div className="mt-[250px] text-center">
        <p>💙</p>
        <p className="text-[#787878] text-[18px]">Sevinda Charuka Perera</p>
        <p className="text-[#787878] text-[18px]">2023 &copy;</p>
      </div>
    </>
  );
};

export default Contact;
