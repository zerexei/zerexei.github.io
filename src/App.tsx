import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AboutMe from "./pages/AboutMe";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <Router>
      <div className="font-oswald bg-gray-900 text-gray-200">
        <Header />

        <main>
          <div className="md:w-3/4 mx-auto">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/tools" component={Tools} />
            </Switch>
          </div>
        </main>

        <footer className="flex justify-center items-center h-20 p-4 -mt-6 bg-gray-800">
          <p className="text-xs lg:text-base">Know thy code.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
