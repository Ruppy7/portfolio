import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-7">
          Once again welcome to this portfolio website, crafted with ReactJS and
          designed with TailwindCSS. This project has been a valuable learning
          experience for me as I aimed to master the art of TailwindCSS. 
          <br />
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
        <br />

        <p className=" text-xl mb-10">
          Undoubtedly, delving into the world of Django presented its own
          challenges, but it was precisely these hurdles that made the
          experience more engaging and rewarding. As a backend developer,
          venturing into frontend development with React and Tailwind proved to
          be an enjoyable and exciting endeavor. With this portfolio, I aim to
          showcase my skills and growth as a web developer. Feel free to explore
          and discover the projects and concepts I have been working on.
        </p>
      </div>
    </div>
  );
};

export default About;
