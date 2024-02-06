import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Contact",
    },
    /*{
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },*/
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white fixed bg-gradient-to-t">
      <div>
        <h1 className=" cursor-pointer text-sky-400 text-xl md:text-2xl font-normal ml-2"> 
          <Link to="Home" smooth duration={500}> Rupesh </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-8 cursor-pointer font-normal text-white hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500} > {link} </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className=" md:hidden pr-2 z-10 text-white">
        { nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>
    {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t">
        {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize py-6 text-4xl font-light"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} > {link} </Link>
            </li>
          ))}
        </ul>
    )}
    </div>
  );
};

export default Navbar;
