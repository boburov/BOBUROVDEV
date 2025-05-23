import React from "react";
import html_icon from "../assets/icons/html.webp";
import css_icon from "../assets/icons/css.webp";
import js_icon from "../assets/icons/javascript.webp";
import tailwind_icon from "../assets/icons/tailwind.webp";
import react_icon from "../assets/icons/react.webp";
import leaft_icon from "../assets/icons/leaft.png";
import nodejs_icon from "../assets/icons/nodejs.webp";
import swiper_icon from "../assets/icons/swiper.png";
import gsap_icon from "../assets/icons/gsap.jpg";
import git_icon from "../assets/icons/git.png";
import mui_icon from "../assets/icons/mui.png";
import typescriptic from "../assets/icons/typescript.png";
import npmic from "../assets/icons/npm.png";
import nestjs from "../assets/icons/nestjs.webp";
import nextjs from "../assets/icons/nextjs.webp";

const Ability = () => {
  const skill_imgs = [
    { name: "html", img_name: html_icon, isCompleated: true },
    { name: "css", img_name: css_icon, isCompleated: true },
    { name: "tailwind", img_name: tailwind_icon, isCompleated: true },
    { name: "js", img_name: js_icon, isCompleated: true },
    { name: "react", img_name: react_icon, isCompleated: true },
    { name: "nodejs", img_name: nodejs_icon, isCompleated: false },
    { name: "leaft", img_name: leaft_icon, isCompleated: true },
    { name: "gsap", img_name: gsap_icon, isCompleated: false },
    { name: "swiper", img_name: swiper_icon, isCompleated: true },
    { name: "git", img_name: git_icon, isCompleated: true },
    { name: "mui", img_name: mui_icon, isCompleated: true },
    { name: "typescript", img_name: typescriptic, isCompleated: false },
    { name: "npm", img_name: npmic, isCompleated: true },
    { name: "next js", img_name: nextjs, isCompleated: false },
    { name: "nest js", img_name: nestjs, isCompleated: false },
  ];

  return (
    <div className="container space-y-10">
      <h1 className="montbold text-4xl max-md:text-2xl">Ability & Education</h1>

      <div className="w-full flex gap-x-20 max-md:flex-col">
        <div className="w-1/2 grid grid-cols-5 gap-x-10 gap-y-3  mb-10 items-center justify-center havebg max-md:grid-cols-3 max-md:gap-3 max-md:w-full">
          {skill_imgs.map((elem, index) => {
            return (
              <div
                key={index}
                className="skill-item w-28 h-36 overflow-hidden relative hover:scale-110 transition-all flex flex-col items-center max-md:w-20 max-md:h-28"
              >
                <img
                  className="w-28 h-28 object-contain p-2 bg-white rounded-2xl max-md:rounded-md"
                  src={elem.img_name}
                  alt={elem.name + " icon"}
                />
                {!elem.isCompleated && (
                  <span className="montbold absolute w-full h-6 flex items-center justify-center bg-black/70 text-white z-10 top-5 -right-6 text-center border-y-2 rotate-45 text-sm max-md:text-[9px] max-md:top-2">
                    in process
                  </span>
                )}
                {elem.isCompleated && (
                  <span className="montbold absolute w-full h-6 flex items-center justify-center bg-green-700/80 text-white z-10 top-5 -right-6 text-center border-y-2 rotate-45 text-sm max-md:text-[9px] max-md:top-2">
                    success
                  </span>
                )}
                <h4 className="montmed text-black text-lg">{elem.name}</h4>
              </div>
            );
          })}
        </div>

        <div className="w-1/2 flex flex-col items-start max-md:w-full max-md:text-xs">
          <h2
            data-aos="fade-up"
            data-aos-duration="300"
            className="text-3xl montbold border-b-2 mb-6 max-md:text-xl"
          >
            Education
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="350"
            className="text-gray-700"
          >
            I started learning IT in 2021, and to this day, I continue improving
            my frontend skills. I have a strong passion for{" "}
            <strong>
              3D web design, interactive websites, and canvas games
            </strong>
            . However, sometimes I struggle with motivation. But whenever that
            happens, I remind myself of this quote:
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="400"
            className="text-xl font-semibold text-center text-gray-900"
          >
            <em>"Big dreams need big sacrifices."</em>
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="450"
            className="text-gray-700 mb-4"
          >
            This pushes me to start learning something new, whether it's{" "}
            <strong>React</strong> or another programming language.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-gray-700 mb-3"
          >
            I especially love 3D web design because it looks stunning, modern,
            and premium. Even though it was harder to learn compared to other
            frameworks, I kept going, and now it feels much easier for me. I
            have even created a <strong>3D scroll animation website</strong> as
            part of my journey.
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="550"
            className="text-gray-700"
          >
            It took me <strong>two years</strong> to land my first job in this
            field. This is a short summary of my education history, and one day,
            I believe{" "}
            <strong>English will become my native-level language.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ability;
