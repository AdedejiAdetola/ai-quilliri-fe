import React from "react";
import Image from "next/image";

const AutoQuestions = (props: {
  text: string;
  image: string;
  extraStyle: string;
  pStyle: string;
}) => {
  const { text, image, extraStyle, pStyle } = props;

  return (
    <div
      className={`flex ${extraStyle} items-center border-[1px] border-[#0A1C3B] bg-custom-gradient rounded-[15px] py-[10px] px-[5px] h-[40px] w-max`}
    >
      <p className={`text-[#0A1C3B] leading-6 ${pStyle}`}>{text}</p>
      <Image
        src={image}
        alt="AI Quilliri Logo"
        width={30}
        height={30}
        priority
      />
    </div>
  );
};

export default AutoQuestions;
