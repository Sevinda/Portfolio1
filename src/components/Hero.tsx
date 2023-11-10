import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex justify-center items-center flex-col relative">
      <Spline
        scene="https://prod.spline.design/oKHVcueC4mxMTRNg/scene.splinecode"
        className="max-sm:hidden"
      />
      <div className="absolute flex flex-col items-center">
        <div className="mb-[50px]">
          <h1 className="text-[70px] font-medium">Sevinda Perera</h1>
          <p className="text-[25px]">Software Engineering Undergraduate</p>
        </div>
        <p className="bg-neutral-900 py-[10px] px-[40px] text-center rounded-full w-fit flex justify-center items-center">
          Click and Drag the model to move.
        </p>
      </div>
    </div>
  );
};

export default Hero;
