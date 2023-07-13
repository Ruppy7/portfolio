import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com/in/rupesh7778/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/ruppy7",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:rupeshk7778@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://flowcv.com/resume/imbqa55c1f",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child,href,style}) => (
          <li key={id} className={" flex justify-between items-center w-40 h-14 pl-4 pr-5 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gradient-to-r to-gray-600 from-cyan-800 " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
