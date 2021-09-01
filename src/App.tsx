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

                  <div className="flex justify-center gap-1 mb-4">
                    <MailIcon className="w-8 h-8" />
                    <MailIcon className="w-8 h-8" />
                    <MailIcon className="w-8 h-8" />
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
