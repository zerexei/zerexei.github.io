import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

// TODO: separate to components
const App = () => {
  return (
    <Router>
      <div className="font-oswald bg-gray-900 text-gray-200">
        <Header />
        <main>
          <Switch>
            <div className="md:w-3/4 mx-auto">
              <Route exact path="/" component={Home} />
              <Route path="/profile">
                <p>profile</p>
              </Route>
              <Route path="/utilities">
                <p>utilities</p>
              </Route>
            </div>
          </Switch>
        </main>
        <footer className="flex justify-center items-center h-20 p-4 -mt-6 bg-gray-800">
          <p className="text-xs lg:text-base">
            Know thy code.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
