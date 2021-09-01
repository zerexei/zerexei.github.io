import { ChevronDoubleDownIcon, MailIcon } from "@heroicons/react/solid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <div className="font-oswald">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <section className="mb-6 text-center">
                <div id="banner" className="my-12">
                  <h3 className="text-3xl font-bold mb-16">
                    Welcome to my Website
                  </h3>

                  <div className="w-1/3 pt-6 mx-auto">
                    <img
                      src="https://picsum.photos/200"
                      alt="user avatar"
                      className="w-full object-cover rounded-full"
                    />
                  </div>

                  <p className="mb-1">Web Developer</p>

                  <div className="flex justify-center gap-2 mb-4">
                    {/* GITHUB */}
                    <a href="#github">
                      <svg className="w-7 h-7" viewBox="0 0 24 24">
                        <title>Github</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>

                    {/* Discord */}
                    <a href="#discord">
                      <svg
                        className="w-7 h-7 text-blue-800"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <title>Discord</title>
                        <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
                      </svg>
                    </a>

                    {/* STEAM */}
                    <a href="#steam">
                      <svg className="w-7 h-7" viewBox="0 0 24 24">
                        <title>Steam</title>
                        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"></path>
                      </svg>
                    </a>

                    {/* GMAIL */}
                    <a href="mailto:angeloarcillas64@gmail.com">
                      <svg
                        className="w-7 h-7 text-red-500"
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <title>Gmail</title>

                        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
                      </svg>
                    </a>
                  </div>

                  <p className="p-2 py-4 bg-red-200">
                    I am Angelo Arcillas, an aspiring web developer from the
                    philippines. I love back-end development and Cybersecurity.
                  </p>
                </div>

                <div className="animate-bounce inline-block p-2 text-red-400 border-2 border-red-400 rounded-full cursor-pointer hover:bg-red-400 hover:text-white hover:border-white">
                  <ChevronDoubleDownIcon className="w-8 h-8 text-current" />
                </div>
              </section>
            </Route>
            <Route path="/profile">
              <p>profile</p>
            </Route>
            <Route path="/utilities">
              <p>utilities</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
