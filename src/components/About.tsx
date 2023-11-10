import profilePicture from "../assets/Gojo.jpg";

const About = () => {
  return (
    <div id="about" className="mt-[50px] px-[100px] flex">
      <img
        src={profilePicture}
        alt="profile picture"
        className="h-[500px] w-[400px] object-cover"
      />
      <div className="w-[600px] pl-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consectetur quod dolor dolore? Tempora mollitia laboriosam quibusdam
          aperiam, distinctio doloribus? Aperiam provident facilis natus
          possimus dolorum ut voluptate dolor porro, excepturi voluptatum
          ratione molestias eos quod nisi consequatur ipsam ex libero.
          Cupiditate deserunt ab hic eaque sapiente illo molestias! Delectus
          recusandae laboriosam facilis omnis reprehenderit optio numquam
          deleniti nemo quod. Illum commodi quo suscipit laborum unde maxime
          voluptatum vitae omnis quos. Obcaecati corporis eum quasi! Enim esse
          eaque totam quas, nesciunt recusandae vitae dicta rerum eligendi
          itaque obcaecati ipsum tempore, est blanditiis laboriosam? Et fugiat,
          deserunt debitis fugit laudantium ratione?
        </p>
      </div>
    </div>
  );
};

export default About;
