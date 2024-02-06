import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="About"
      className=" w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-sm md:text-xl md:mt-7">
          Once again welcome to this portfolio website, crafted with ReactJS and
          designed with TailwindCSS. This project has been a valuable learning
          experience for me as I aimed to master the art of TailwindCSS. 
          <br />
          My
          journey in web development began with a focus on backend development,
          driven by a curiosity about data storage, manipulation, and frontend
          interaction. To deepen my understanding, I embarked on the CS50 course
          offered by Harvard University, which provided a solid foundation in
          Python and other programming concepts. This served as a catalyst for
          my exploration of Django and other courses offered by META on Coursera. 
        </p>
        <br />

        <p className=" text-sm md:text-xl mb-10">
          Undoubtedly, delving into the world of Django presented its own
          challenges, but it was precisely these hurdles that made the
          experience more engaging and rewarding. As a backend developer,
          venturing into frontend development with React and Tailwind proved to
          be an enjoyable and exciting endeavor. With this portfolio, I aim to
          showcase my skills and growth as a web developer. Feel free to explore
          and discover the projects and concepts I have been working on.
        </p>

        <div>
            <Link to="Skills" smooth duration={500}>
              <button className=" group cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-black w-fit px-6 py-3 my-2 flex items-center rounded-md">
                Skills
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={24} />
                </span>
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default About;
