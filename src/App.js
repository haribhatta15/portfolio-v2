import Button from "react-bootstrap/Button";
import React from "react";
import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      {/* <!-- Dark mode button --> */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />
      <div class="wrapper" id="section0">
        {/* <!-- Dark Mode --> */}
        <label for="darkMode">
          <i class="fa-sharp fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
        {/* <!-- Header section starts--------------------- --> */}
        <header class="primary-header flex">
          <div class="logo flex">
            <div>
              <h1>Hari</h1>
            </div>

            <div>
              <h1 class="line">Front-end Developer</h1>
            </div>
          </div>

          <div class="right">
            <input type="checkbox" id="check" />
            <label for="check" class="menu-icon">
              <i class="fa-sharp fa-solid fa-bars"></i>
            </label>

            <ul class="navigation flex">
              <li>
                <a href="#section0">Home</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>
        {/* <!-- Header section ends--------------------- --> */}
        {/* <!--Hero section starts  ----------> */}
        <section class="section1 grid" id="homes">
          <div class="left flex">
            <img src="../assets/images/hari-img.png" alt="image" />
          </div>

          <div class="right flex">
            <div class="flex">
              <h2 class="name">Hari Bhatta</h2>
              <p class="tag">Front-end Developer</p>
            </div>

            <button>
              <a href="../assets/hari-resume.pdf" download="hari-resume">
                Download Resume
                <span>
                  <i class="fa-sharp fa-solid fa-download"></i>
                </span>
              </a>
            </button>
          </div>
        </section>
        {/* <!--Hero section ends ---------- --> */}
        {/* <!-- Banner Section starts--------- --> */}
        <section class="section2">
          <div class="info-container flex">
            <div class="info-lists flex">
              {/* <!-- First info content --> */}
              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>
                <span>
                  <h4>IT</h4>
                  <p>Graduate</p>
                </span>
              </div>

              {/* <!-- Divider --> */}
              <div class="info-divider"></div>

              {/* <!-- Second info content --> */}
              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>
                <span>
                  <h4>6 + Projects</h4>
                  <p>Completed</p>
                </span>
              </div>

              {/* <!-- Divider --> */}
              <div class="info-divider"></div>

              {/* <!-- Third info content --> */}
              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>
                <span>
                  <h4>1 + Year</h4>
                  <p>Job Experience</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Banner Section ends--------- --> */}
        {/* <!-- Skills Section starts --------------> */}
        <section class="section3" id="skills">
          <h1 class="title">SKILLS</h1>
          <div class="skills-container flex">
            <div class="html5 flex">
              <i class="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div class="css3 flex">
              <i class="fa-brands fa-css3"></i>
              <span>CSS</span>
            </div>

            <div class="javascript flex">
              <i class="fa-brands fa-js"></i>
              <span>JAVASCRIPT</span>
            </div>

            <div class="react flex">
              <i class="fa-brands fa-react"></i>
              <span>REACT</span>
            </div>

            <div class="firebase flex">
              <i class="fa-solid fa-code-branch"></i>
              <span>FIREBASE</span>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div class="skills-container2 flex">
            <div class="bootstrap flex">
              <i class="fa-brands fa-bootstrap"></i>
              <span>BOOTSTRAP</span>
            </div>

            <div class="nodejs flex">
              <i class="fa-brands fa-node-js"></i>
              <span>NODE- JS</span>
            </div>

            <div class="sass flex">
              <i class="fa-brands fa-sass"></i>
              <span>SASS</span>
            </div>

            <div class="java flex">
              <i class="fa-brands fa-java"></i>
              <span>JAVA</span>
            </div>

            <div class="figma flex">
              <i class="fa-brands fa-figma"></i>
              <span>FIGMA</span>
            </div>
          </div>
        </section>
        {/* <!-- Skills Section ends---------- --> */}
        {/* <!-- Projects section starts ------------> */}
        <div class="section4 flex" id="projects">
          <h1 class="title">PROJECTS</h1>

          {/* <!-- adare restaurant website --> */}
          <div class="project-container grid">
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/adare-rest-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>
                    Designing a website for a restaurant using HTML and CSS
                    during one of my web development projects
                  </p>
                </strong>
              </div>
            </div>

            {/* <!-- photography website --> */}
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/photography-web-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>Designing a photography website using HTML and CSS</p>
                </strong>
              </div>
            </div>

            {/* <!-- nirman sathi website --> */}
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/nirman-sathi-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>
                    Designing a website for 'Nirman Sathi' using ReactJs and
                    Firebase
                  </p>
                </strong>
              </div>
            </div>

            {/* <!-- metamuim website design --> */}
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/metamuim-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>
                    Designing a website for an organization using ReactJs and
                    Bootstrap
                  </p>
                </strong>
              </div>
            </div>

            {/* <!-- travel blog project design --> */}
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/travel-blog-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>Designing a travel blog project using HTML and CSS</p>
                </strong>
              </div>
            </div>

            {/* <!-- calculator website design --> */}
            <div class="project-card flex">
              <div class="top">
                <img src="../assets/images/calculator-img.png" alt="" />
              </div>

              {/* <!-- button to display source code on hover --> */}
              <div class="btn-card">
                <button>
                  <a href="https://www.google.com/" target="_blank">
                    SOURCE CODE
                  </a>
                </button>
              </div>
              {/* <!-- btn end --> */}

              <hr />
              <div class="bottom">
                <strong>
                  <p>Designing a calculator using HTML, CSS and JavaScript</p>
                </strong>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Projects section ends -------------> */}
        {/* <!-- About section starts --> */}
        <div class="section5 flex" id="about">
          <h1 class="title">ABOUT</h1>

          <div class="about-container flex">
            <div class="left">
              <div class="bg"></div>
              <img src="../assets/images/hari-img2.png" alt="images" />
            </div>

            <div class="right flex">
              <h2>Hari Bhatta</h2>
              <p>
                Passionate and self-motivated front-end developer with 1+ years
                of experience in creating responsive web platforms. Punctual,
                capable of prioritising tasks, providing web initiatives and
                enjoying working independently as well as, as a team.
              </p>

              <p>
                I am originally from Nepal and currently living in Sydney,
                Australia.
              </p>

              <a
                href="https://www.linkedin.com/in/haribhatta15"
                target="_blank"
              >
                Connect with me
                <i class="fa-sharp fa-solid fa-square-up-right"></i>
              </a>

              <div class="flex">
                <div class="tag">Interests</div>
                <div>
                  <span>Coding</span>
                  <span>Football</span>
                  <span>Travelling</span>
                  <span>Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About section ends --> */}
        {/* <!-- Contact section starts --> */}
        <div class="section6 flex" id="contact">
          <h1 class="title">CONTACT</h1>

          <div class="socials flex">
            <a href="https://www.linkedin.com/in/haribhatta15" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/haribhatta15" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.facebook.com/hareebhatta5" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/haree.15" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>

          <h1>OR</h1>

          <div class="email-section flex">
            <p>Reach out over email</p>
            <div class="email">
              <a href="mailto:haree5bhatta@gmail.com">example@gmail.com</a>

              <div class="send">
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Contact section ends --> */}
        {/* <!-- footer section starts --> */}4


        <footer>

        
        <div class="footer-container flex">
          <div class="footer-top flex">
            <div class="flex">
              <h3>Links</h3>
              <ul class="flex">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div class="flex">
              <h3>External Links</h3>
              <ul class="flex">
                <li>
                  <a
                    href="https://www.linkedin.com/haribhatta15"
                    target="_blank"
                  ></a>
                  LinkedIn
                </li>
                <li>
                  <a href="https://github.com/haribhatta15" target="_blank"></a>
                  GitHub
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/haree.15/"
                    target="_blank"
                  ></a>
                  Instagram
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- <div class="arrow"> */}
          <div class="btn">
            <a href="#section0">
              <button>
                <i class="fa-solid fa-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>
        <div class="arrow">
          <a href="#section0" class="button">
            <i class="fa-solid fa-arrow-up"></i>
          </a>
        </div>
        <div class="footer-bottom flex">
          <p>&copy 2023 Hari Design | All Rights Reserved.</p>
        </div>
      </div>
      </footer>

      {/* <!-- footer section ends --> */}
    </>
  );
}

export default App;
