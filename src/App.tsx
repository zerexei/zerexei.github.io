import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/Home";

// TODO: separate to components
const App = () => {
  return (
    <Router>
      <div className="font-oswald">
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
