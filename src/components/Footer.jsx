import React from "react";
import Github from "../../public/assets/Social Icons/Github.svg";
import Linkedin from "../../public/assets/Social Icons/LinkedIn.svg";
import Twitter from "../../public/assets/Social Icons/Twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#2f3038]">
      <div className="mx-32 flex flex-row justify-between p-3">
        <div className="font-mono">Johnatan Specter</div>
        <div className="flex row-auto space-x-4">
          <Image src={Twitter} alt="Twitter" />
          <Image src={Linkedin} alt="Linkedin" />
          <Image src={Github} alt="Github" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
