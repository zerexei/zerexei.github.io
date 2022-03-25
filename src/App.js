import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

import html_icon from "./assets/skills/html.jpeg";
import css_icon from "./assets/skills/css.jpeg";
import js_icon from "./assets/skills/js.jpeg";

function App() {
  return (
    <div className="font-mono  mx-auto">
      <header className="bg-blue-200 pt-6 pb-2 h-12 flex justify-center items-center space-x-4 uppercase font-bold text-blue-500">
        <a href="#" className="tracking-wide hover:text-blue-700">
          Home
        </a>
        <a href="#" className="tracking-wide hover:text-blue-700">
          projects
        </a>
        <a href="#" className="tracking-wide hover:text-blue-700">
          tools
        </a>
      </header>

      <div className="lg:flex p-6 text-gray-900 tracking-tight">
        <div className="hidden lg:block lg:flex-1"></div>
        <div className="lg:flex-1">
          {/* ---------------*/}
          <div className="flex items-center mb-12">
            <p className="flex-1">
              <h1 className="text-4xl font-bolder">Angelo Arcillas</h1>
              <h2 className="text-sm text-gray-500">
                angeloarcillas64@gmail.com
              </h2>
              <h3 className="text-xl font-bold text-gray-500">Web Developer</h3>
            </p>
            <div className="w-28">
              <img
                className="object-cover rounded-full"
                src="https://picsum.photos/500"
                alt="avatar"
              />
            </div>
          </div>

          {/* --------------- */}
          <div className="mb-12">
            <p className="mb-6">
              Heya I'm Daaave,{" "}
              <span className="font-bold text-black">
                a web developer with 6+ years experience writting javascript,
                PHP & SQL
              </span>
              . I specialize in building web apps using frameworks like
              <span className="font-bold text-black">
                {" "}
                Tailwindcss, React.js and laravel
              </span>
              . I am an aspiring web developer from philippines who loves
              back-end web development, I always prioritize in best practices
              and security to ensure that I can produce a high quality and
              secure codebase for problem solutions. I enjoy watching anime,
              playing pc games and PROGRAMMING.
            </p>
            <p className="mb-6">
              If you're interested in hiring me{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                check out my resume
              </a>{" "}
              and you can contact me through my{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                email
              </a>
              . I am currently looking for web dev contracts/roles.
            </p>

            <div className="flex items-center space-x-2 text-blue-500">
              <a href="#" alt="linkedin link">
                <FaLinkedin className="w-8 h-8 hover:text-blue-700" />
              </a>

              <a href="#" alt="github link">
                <FaGithub className="w-8 h-8 hover:text-blue-700" />
              </a>

              <a href="#" alt="stack overflow link">
                <FaStackOverflow className="w-8 h-8 hover:text-blue-700" />
              </a>

              <a href="#" alt="twitter link">
                <FaTwitter className="w-8 h-8 hover:text-blue-700" />
              </a>

              <a href="#" alt="discord link">
                <FaDiscord className="w-8 h-8 hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* ------------ */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Skills</h2>
            <div className="flex space-x-2">
              <span>
                <img
                  src={html_icon}
                  alt="language icon"
                  className="object-cover w-12 h-12"
                />
              </span>

              <span>
                <img
                  src={css_icon}
                  alt="language icon"
                  className="object-cover w-12 h-12"
                />
              </span>

              <span>
                <img
                  src={js_icon}
                  alt="language icon"
                  className="object-cover w-12 h-12"
                />
              </span>
            </div>
          </div>

          {/* ------------ */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Projects</h2>
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="flex-1">
                    <a
                      href="#"
                      alt="project link"
                      className="mr-2 font-bold text-blue-500 hover:text-blue-700"
                    >
                      Project Tile
                    </a>
                    <span className="text-gray-500">Role - Year</span>
                  </h3>
                  <div className="w-12 h-12">
                    <img
                      src="https://picsum.photos/200"
                      alt="project logo"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm">
                  Cras lacinia, velit et varius efficitur, nisl lorem
                  ullamcorper libero, ac vehicula est felis vel magna. Curabitur
                  interdum euismod risus quis rutrum. Suspendisse consectetur,
                  enim eu aliquet accumsan, nulla dolor egestas neque, at
                  euismod justo.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <h3 className="flex-1">
                    <a
                      href="#"
                      alt="project link"
                      className="mr-2 font-bold text-blue-500 hover:text-blue-700"
                    >
                      Project Tile
                    </a>
                    <span className="text-gray-500">Role - Year</span>
                  </h3>
                  <div className="w-12 h-12">
                    <img
                      src="https://picsum.photos/200"
                      alt="project logo"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm">
                  Cras lacinia, velit et varius efficitur, nisl lorem
                  ullamcorper libero, ac vehicula est felis vel magna. Curabitur
                  interdum euismod risus quis rutrum. Suspendisse consectetur,
                  enim eu aliquet accumsan, nulla dolor egestas neque, at
                  euismod justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
