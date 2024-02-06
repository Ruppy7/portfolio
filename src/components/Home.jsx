import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [text, setText] = useState("");
  const intro = "I  am Rupesh";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < intro.length - 1) {
        setText((prevText) => prevText + intro[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when typing is complete
      }
    }, 150);
  
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div
      name="Home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-900"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" text-white flex gap-7 flex-col">
          <h2 className=" text-4xl md:text-8xl font-medium relative">
            {text}
            <span className="animate-blink" style={{ right: `${text.length * 20}px` }}>|</span>
          </h2>
          <p className=" text-justify text-lg md:text-2xl">
            {" "}
            A web developer currently finishing up my Computer Science degree as
            a final-year student at SRMIST. I love learning and using new
            technologies and am infinitely fascinated by the way each and every
            one of them work. Welcome to my portfolio, feel free to snoop around
            and find out more about me.{" "}
          </p>

          <div>
            <Link to="About" smooth duration={500}>
              <button className=" group cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-black w-fit px-6 py-3 my-2 flex items-center rounded-md">
                About
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={24} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;