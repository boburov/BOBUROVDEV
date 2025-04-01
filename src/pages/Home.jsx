import React from "react";
import ink from "../assets/ink.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Ability from "./Ability";

const Home = () => {
  Aos.init();
  return (
    <>
      <div class="container grid grid-cols-2 items-center gap-5">
        <div className="h-7/12 flex flex-col items-start justify-between">
          <div className="flex flex-col items-start gap-7">
            <h1
              className="montbold text-6xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Frontend React Developer
            </h1>
            <p
              className="montmed"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Hey there! I’m Boburov Shukurillo, a Frontend React Developer
              passionate about building modern, user-friendly, and visually
              appealing web applications. I specialize in React.js, JavaScript,
              and Tailwind CSS, with a strong focus on e-commerce websites and
              interactive UI/UX design.
            </p>
          </div>
          <span
            className="montbold cursor-pointer"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            TEACH STACK <hr />
          </span>
        </div>
        <img
          src={ink}
          data-aos="fade-left"
          data-aos-duration="1000"
          alt="Ink Texture"
          class="w-full h-full"
        />
      </div>

      <About />
      <hr />
      <Projects />
      <hr />
      <Ability />
      <hr />
      <Contact />
    </>
  );
};

export default Home;
