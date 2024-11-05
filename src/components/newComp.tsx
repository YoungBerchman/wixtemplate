import { FaArrowRight } from "react-icons/fa";
import pic1 from "../assets/pics/pic1.svg";

const NewComp = ({ header, content, tag }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <img className="rounded-[14px]" src={pic1} alt="" />
      <h1 className="font-bold text-[20px]">{header}</h1>
      <p className="text-neutral-500 font-light text-[14px]">{content}</p>
      <div className="flex gap-3 items-center">
        <p>{tag}</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default NewComp;
