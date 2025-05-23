import about_img from "../assets/office.jpg";
import github from "../assets/github.png";
import telegram from "../assets/telegram.png";
import instalog from "../assets/instalog.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  Aos.init();

  return (
    <div id='about' className="container flex flex-col items-start justify-center gap-10 my-20 max-md:m-40">
      {/* <h2 className='text-2xl montbold'>Every Project Peace Of Skill🧩</h2> */}
      <h2 className="text-4xl montbold max-md:text-2xl">About Me</h2>
      <div className="w-full flex items-center h-96 justify-between max-md:flex-col">
        <img
          data-aos="fade-up"
          data-aos-duration="700"
          src={about_img}
          className="rounded-2xl w-1/2 object-cover h-full max-md:w-full"
          alt=""
        />
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col justify-between gap-y-5 h-full w-1/2 px-10 max-md:w-full max-md:p-0"
        >
          <h3 className="text-3xl montbold max-md:text-xl">
            Studied Frontend in Chinabad, Uzbekistan{" "}
          </h3>
          <p className="montmed w-full text-justify inline-block max-md:text-xs">
            I am Boburov Shukurillo, a Middle Frontend React Developer with a
            passion for building modern and user-friendly e-commerce websites.
            My expertise lies in React.js, JavaScript, and frontend development,
            and I enjoy working with Tailwind CSS to create visually appealing
            designs. Beyond frontend development, I have a strong interest in
            MERN stack development, including Node.js and Vue.js, as I aim to
            expand my skill set. Currently, I am working towards reaching a
            senior-level proficiency in programming by the end of the year,
            alongside improving my English to an upper-intermediate level.
          </p>
          <div className="flex items-center gap-x-5">
            <span className="text-lg montbold max-md:text-xs">Connect with Me :</span>
            <div className="flex items-center justify-around gap-x-3">
              <a target="_blank" href="https://github.com/Boburov-Shukurillo/">
                <img className="rounded-full w-8 max-md:w-4" src={github} alt="" />
              </a>
              <a target="_blank" href="https://t.me/BOBUROV_SHUKURILLO">
                <img className="rounded-full w-8 max-md:w-4" src={telegram} alt="" />
              </a>
              <a target="_blank" href="http://instagram.com/boburov.dev">
                <img className="w-8 max-md:w-4" src={instalog} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
