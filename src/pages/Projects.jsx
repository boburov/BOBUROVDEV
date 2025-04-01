import React, { useEffect } from "react";
import { projects } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="projects" className="mb-20">
      <div className="container">
        <h1 className="text-4xl text-[#1c1c1c] montbold mb-2">
          Projects
        </h1>
        <p className="text-3xl  text-[#1c1c1c] mb-10 max-md:text-2xl  max-sm:text-base">
          Each project is a unique piece of development
        </p>

        <ul className="flex flex-col items-center gap-y-24">
          {projects.map((project, index) => {
            if (index % 2 == 0) {
              return (
                <li
                  key={project.id}
                  className="flex items-start justify-between h-96 max-md:flex-col max-md:items-center max-md:h-[500px] max-lg:items-center"
                >
                  <img
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    src={project.img}
                    alt={project.projectName + " png"}
                    className="rounded-xl w-[733px] object-cover object-right h-full max-xl:w-2/3 max-md:w-full max-md:mb-5 max-lg:h-72 max-lg:w-500"
                  />

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-1/2 flex flex-col items-center justify-center h-full max-md:w-full"
                  >
                    <h2 className="text-3xl myFont text-[#1c1c1c] tracking-widest ZingDemo mb-5 max-xl:text-xl">
                      {project.projectName}
                    </h2>
                    <p className="w-2/3 text-md montmed tracking-wider font-semibold text-[#1c1c1c] mb-7 text-center max-xl:text-sm max-md:text-xl max-xl:w-full max-sm:text-sm max-sm:mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-5 mb-5">
                      {project.usingLanguage.map((pl, index) => {
                        return (
                          <h3
                            key={index}
                            className="montmed text-xl text-[#1c1c1c] tracking-widest max-xl:text-base"
                          >
                            #{pl}
                          </h3>
                        );
                      })}
                    </div>

                    <div className="w-full flex items-center justify-center gap-x-5 max-sm:gap-x-2">
                      <a
                        target="_blank"
                        href={project.gitHb}
                        className="flex items-center gap-5 rounded-md border-2 border-[#1C1C1C] px-5 py-3 hover:bg-transparent vscodehover transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                        >
                          <path
                            fill="#3b3939"
                            d="M23.15 2.587L18.21 0.210001C17.9308 0.075557 17.6167 0.031246 17.3113 0.083204C17.0058 0.135162 16.724 0.280818 16.505 0.500001L7.04499 9.13L2.92499 6.002C2.73912 5.86101 2.50976 5.78953 2.27669 5.79994C2.04363 5.81035 1.82156 5.902 1.64899 6.059L0.326993 7.261C0.223973 7.35465 0.141644 7.46878 0.0852761 7.59608C0.0289081 7.72339 -0.00025659 7.86106 -0.000350724 8.00028C-0.000444857 8.1395 0.0285336 8.27721 0.0847294 8.40459C0.140925 8.53197 0.2231 8.64621 0.325993 8.74L3.89899 12L0.325993 15.26C0.2231 15.3538 0.140925 15.468 0.0847294 15.5954C0.0285336 15.7228 -0.000444857 15.8605 -0.000350724 15.9997C-0.00025659 16.1389 0.0289081 16.2766 0.0852761 16.4039C0.141644 16.5312 0.223973 16.6454 0.326993 16.739L1.64999 17.94C1.82256 18.097 2.04463 18.1887 2.27769 18.1991C2.51076 18.2095 2.74012 18.138 2.92599 17.997L7.04599 14.869L16.506 23.499C16.7248 23.7182 17.0064 23.8639 17.3117 23.9159C17.6171 23.9679 17.931 23.9235 18.21 23.789L23.152 21.412C23.4062 21.2893 23.6207 21.0973 23.7707 20.8581C23.9207 20.619 24.0002 20.3423 24 20.06V3.939C24 3.65647 23.9203 3.37967 23.7699 3.14048C23.6195 2.90129 23.4046 2.70943 23.15 2.587ZM18.004 17.448L10.826 12L18.004 6.552V17.448Z"
                          ></path>
                        </svg>
                        <span className="montmed text-md text-[#1c1c1c]">
                          Get Code
                        </span>
                      </a>
                      <a
                        target="_blank"
                        href={project.netlify}
                        className="howereffec flex items-center gap-5  border-2 border-[#1C1C1C] px-5 py-2.5 rounded-md transition-all"
                      >
                        {" "}
                        <svg
                          fill="#000000"
                          width="28px"
                          height="28px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify icon</title>
                          <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z" />
                        </svg>
                        <span className="text-[#1c1c1c] text-md montmed">
                          {" "}
                          Open Live
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
              );
            } else {
              return (
                <li
                  key={project.id}
                  className="flex items-start justify-between h-96 max-md:flex-col max-md:items-center max-md:h-500px"
                >
                  <img
                    src={project.img}
                    alt={project.projectName + " png"}
                    className="hidden max-md:block rounded-xl w-[233px] h-96 object-cover object-right max-xl:w-2/3 max-md:w-full max-md:mb-5 max-lg:h-72 max-lg:w-500"
                  />

                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="w-full flex flex-col items-center justify-center h-full max-md:w-full"
                  >
                    <h2 className="text-3xl ZingDemo text-[#1c1c1c] tracking-widest mb-5 max-xl:text-xl">
                      {project.projectName}
                    </h2>
                    <p className="w-2/3 text-md montmed font-semibold text-[#1c1c1c] mb-7 text-center max-xl:text-sm max-md:text-xl max-xl:w-full max-sm:text-sm max-sm:mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-5 mb-5">
                      {project.usingLanguage.map((pl, index) => {
                        return (
                          <h3
                            key={index}
                            className="myFont text-xl text-[#1c1c1c] max-xl:text-base montmed tracking-wider"
                          >
                            #{pl}
                          </h3>
                        );
                      })}
                    </div>

                    <div className="w-full flex items-center justify-center gap-x-5 max-sm:gap-x-2">
                      <a
                        target="_blank"
                        href={project.gitHb}
                        className="flex items-center gap-5 rounded-md border-2 border-[#1C1C1C] px-5 py-3 hover:bg-transparent vscodehover transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                        >
                          <path
                            fill="#3b3939"
                            d="M23.15 2.587L18.21 0.210001C17.9308 0.075557 17.6167 0.031246 17.3113 0.083204C17.0058 0.135162 16.724 0.280818 16.505 0.500001L7.04499 9.13L2.92499 6.002C2.73912 5.86101 2.50976 5.78953 2.27669 5.79994C2.04363 5.81035 1.82156 5.902 1.64899 6.059L0.326993 7.261C0.223973 7.35465 0.141644 7.46878 0.0852761 7.59608C0.0289081 7.72339 -0.00025659 7.86106 -0.000350724 8.00028C-0.000444857 8.1395 0.0285336 8.27721 0.0847294 8.40459C0.140925 8.53197 0.2231 8.64621 0.325993 8.74L3.89899 12L0.325993 15.26C0.2231 15.3538 0.140925 15.468 0.0847294 15.5954C0.0285336 15.7228 -0.000444857 15.8605 -0.000350724 15.9997C-0.00025659 16.1389 0.0289081 16.2766 0.0852761 16.4039C0.141644 16.5312 0.223973 16.6454 0.326993 16.739L1.64999 17.94C1.82256 18.097 2.04463 18.1887 2.27769 18.1991C2.51076 18.2095 2.74012 18.138 2.92599 17.997L7.04599 14.869L16.506 23.499C16.7248 23.7182 17.0064 23.8639 17.3117 23.9159C17.6171 23.9679 17.931 23.9235 18.21 23.789L23.152 21.412C23.4062 21.2893 23.6207 21.0973 23.7707 20.8581C23.9207 20.619 24.0002 20.3423 24 20.06V3.939C24 3.65647 23.9203 3.37967 23.7699 3.14048C23.6195 2.90129 23.4046 2.70943 23.15 2.587ZM18.004 17.448L10.826 12L18.004 6.552V17.448Z"
                          ></path>
                        </svg>
                        <span className="montmed text-md text-[#1c1c1c]">
                          Get Code
                        </span>
                      </a>
                      <a
                        target="_blank"
                        href={project.netlify}
                        className="howereffec flex items-center gap-5  border-2 border-[#1C1C1C] px-5 py-2.5 rounded-md transition-all"
                      >
                        {" "}
                        <svg
                          fill="#000000"
                          width="28px"
                          height="28px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify icon</title>
                          <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z" />
                        </svg>
                        <span className="text-[#1c1c1c] text-md montmed">
                          {" "}
                          Open Live
                        </span>
                      </a>
                    </div>
                  </div>
                  <img
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    src={project.img}
                    alt={project.projectName + " png"}
                    className=" max-md:hidden rounded-xl w-[733px] h-96 object-cover object-right max-xl:w-2/3 max-md:w-full max-md:mb-5"
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
