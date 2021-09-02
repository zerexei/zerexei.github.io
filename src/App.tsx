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
            <Route exact path="/" component={Home} />
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
