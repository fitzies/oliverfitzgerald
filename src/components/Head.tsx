import { IoLocationSharp } from "react-icons/io5";
import Motion from "./Motion";

const Head = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <Motion
        duration={0.5}
        type="fade"
        className="font-bold text-3xl lg:text-8xl py-2 gradient-text"
      >
        Hi, I am Oliver Fitzgerald
      </Motion>
      <Motion
        duration={0.5}
        type="fade"
        className="flex flex-col gap-3 justify-center"
      >
        <div className="flex justify-center items-center gap-2 font-medium">
          <IoLocationSharp className="text-xl" /> Singapore, Singapore
        </div>
        <p className="text-lg text-center w-2/3 mx-auto">
          Recently graduated student now channeling my passion and dedication
          into perfecting my skills in creating web applications, striving to
          create seamless, efficient, and innovative web solutions.
        </p>
      </Motion>
    </div>
  );
};

export default Head;
