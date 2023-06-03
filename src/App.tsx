import './App.css';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Header from './components/Header';
import UpIcon from './components/icons/UpIcon';

function App() {
  window.onscroll = () => {
    const scroll_top_button: HTMLElement | null =
      document.querySelector('#scroll-top');

    if (!scroll_top_button) return;

    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      scroll_top_button.style.display = 'block';
    } else {
      scroll_top_button.style.display = 'none';
    }
  };

  return (
    <div className="w-screen min-h-screen antialiased">
      <div className="relative max-w-screen-2xl mx-auto w-full py-4">
        <div className="max-w-screen-xl mx-auto px-5">
          <Header />

          {/* main */}
          <main>
            {/* User Info */}
            <section className="min-h-[35rem] flex justify-center items-center">
              {/* Name/Role */}
              <div className="text-center">
                <div className="mb-6">
                  <h2 className="mb-2 text-4xl font-bold tracking-tight sm:text-6xl text-primary">
                    Angelo Arcillas
                  </h2>
                  <h5 className="text-xl">Web Developer</h5>
                </div>
                {/* End of name/role */}

                {/* Bio */}
                <div>
                  <p className="w-2/3 mx-auto">
                    Web developer with experience writing Javascript and PHP
                    with some knowledge of linux server administration, I
                    specialize in building web applications using frameworks
                    like Reactjs, Vuejs, Laravel and Tailwindcss. I am a
                    graduate of BS Computer Science majoring in software
                    technology. A self-motivated, Adept learner and hard working
                    developer who loves back end development.
                  </p>
                  
                  <ComingSoon />
                </div>
                {/* End of bio */}
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="pt-6 pb-12">
              <h2 className="text-center mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[1, 1, 1, 1, 1, 1, 1].map(() => {
                  return (
                    <div className="group/project p-2 min-h-[15rem] cursor-pointer">
                      <div className="flex flex-col h-full w-full p-4 rounded-md border border-gray-500 group-hover/project:bg-gray-800 shadow-md shadow-gray-800">
                        <div className="flex-1 mb-6">
                          <h5 className="text-2xl font-semibold mb-2">
                            Lorem Ipsum
                          </h5>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Est id culpa tenetur atque dolorum fugit ab
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {['html', 'css', 'js', 'php', 'sql'].map((x) => {
                            return (
                              <span className="py-px px-4 text-xs border border-red-400 font-bold text-red-400 rounded-full">
                                {x}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* End of projects */}

            {/* Technologies */}
            <section id="technologies" className="pt-6 pb-12">
              <h2 className="text-center mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-primary">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {[1, 1, 1, 1, 1, 1, 1].map(() => {
                  return (
                    <div className="px-6 py-4 cursor-pointer hover:text-red-300 border border-transparent hover:border-red-400 rounded-full flex items-center gap-2 text-sm">
                      <div className="bg-red-400 rounded-full p-2">
                        <UpIcon />
                      </div>
                      <div className="flex-1">JavaScript</div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* End of technologies */}
          </main>
          {/* End of main */}

          <Footer />

          <span
            id="scroll-top"
            onClick={() => scrollTo(0, 0)}
            className="fixed bottom-5 right-8 p-4 animate-bounce bg-red-400/75 hover:bg-red-400 cursor-pointer rounded-full"
          >
            <UpIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
