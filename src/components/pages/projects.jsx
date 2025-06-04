import React from "react";
import "../css/projects.css";
import Cube from "../../imgs/4Dprojection.png";
import OpenGL from "../../imgs/opengl.png";
import {
  faGithub,
  faGoogle,
  faFontAwesome,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioSite from "../../imgs/portfolio.png";
import monitoring from "../../imgs/monitoring.png";
import { SiPython } from "react-icons/si";
import chatApp from "../../imgs/chatApp.png";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function projects() {
  return (
    <div className="projects animate__animated animate__bounceInDown">
      <figure>
        <img src={Cube} alt="4D projection" className="cube" />
        <figcaption>
          4D projected Cube created as final project for CS450(computer graphics
          course at Oregon State University). The projects was completed using
          OpenGL and matrix multiplication to convert a 4D object into 3D for
          openGL to display. To get the proper effect for a 4D cube warp and
          changing size needed to implement stereographic projection.
        </figcaption>
        <div className="tech">
          <a href="https://github.com/coneheadlarry/4DCube" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <img src={OpenGL} alt="OpenGL icon" />
        </div>
      </figure>

      <figure>
        <img src={PortfolioSite} alt="Portfolio Site" className="portfolio" />
        <figcaption>
          Portfolio Site created using React and Node. The site is hosted on
          github pages and uses react router to navigate between pages. The site
          is responsive and uses CSS flexbox to display the projects in a grid
          layout. Fonts were set using google fonts, icons from fontawesome and
          iconshock.
        </figcaption>
        <div className="tech">
          <a href="https://search.brave.com/search?q=google+fonts&source=desktop"></a>
          <a href="https://fontawesome.com/">
            <FontAwesomeIcon icon={faFontAwesome} size="3x" />
          </a>
          <a href="https://reactjs.org/">
            <FontAwesomeIcon icon={faReact} size="3x" />
          </a>
          <a href="https://reactjs.org/">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
          </a>
          <a href="https://pages.github.com/">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
      </figure>

      <figure>
        <img src={monitoring} alt="Portfolio Site" className="portfolio" />
        <figcaption>
          Built on commission for polish competitive boinc. Tools was build to
          parse a 100k+ like output to the termial using RegEx. Then storted the
          output into a SQLLite DB which was used to generate the table using
          mathplotLib.
        </figcaption>
        <div className="tech">
          <a href="https://search.brave.com/search?q=google+fonts&source=desktop"></a>
          <a
            href="https://python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPython size={48} color="#FFD43B" />
            <a href="https://github.com/coneheadlarry/Bionic-monitor">
              <FaGithub size={48} />
            </a>
          </a>
        </div>
      </figure>

      <figure>
        <img src={chatApp} alt="Portfolio Site" className="portfolio" />
        <figcaption>
          Built as a capstone project at Oregon State University following Scrum
          plan. I was responsible for implementing user authentication,
          including sign-in and sign-up functionality, using Node, Express,
          MongoDB, Next.js, and JSON Web Tokens. I also managed deployment on
          Google Cloud via a virtual machine. The application’s interface and
          layout were styled using Tailwind CSS.
        </figcaption>
        <div className="tech">
          <SiTypescript size={48} />
          <FaNodeJs size={48} />
          <SiNextdotjs size={48} />
          <SiGooglecloud size={48} />
          <TbBrandMongodb size={48} />
          <SiTailwindcss size={48} />
          <a href="https://github.com/cbremseth/synchronous-communication-platform">
            <FaGithub size={48} />
          </a>
        </div>
      </figure>
    </div>
  );
}

export default projects;
