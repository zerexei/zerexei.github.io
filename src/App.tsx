import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <div className="font-oswald">
        <Header />
        <main className="p-4">
          <Switch>
            <Route exact path="/">
              <section className="p-4 text-center">
                <div id="banner" className="p-2 mb-4">
                  <h3 className="text-3xl font-bold mb-16">
                    Welcome to my Website
                  </h3>

                  <div className="w-1/3 -mb-2 mx-auto">
                    <img
                      src="https://picsum.photos/200"
                      alt="user avatar"
                      className="w-full object-cover rounded-full"
                    />
                  </div>

                  <p className="p-2 bg-red-100 bg-opacity-50 rounded">
                    I am Angelo Arcillas, an aspiring web developer from the
                    philippines. I love back-end development and Cybersecurity.
                  </p>
                </div>

                <div className="inline-block p-2 border-2 border-red-400 rounded-full">
                  <ChevronDoubleDownIcon className="w-8 h-8 text-red-400" />
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
