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
              <p>Home</p>
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
