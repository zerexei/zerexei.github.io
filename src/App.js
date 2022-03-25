import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tools from "./pages/Tools";

import Header from "./components/Header";
import Skills from "./components/Skills";
import UserInfo from "./components/UserInfo";
import UserDescription from "./components/UserDescription";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="font-mono  mx-auto">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="lg:flex p-6 text-gray-900 tracking-tight">
      {/* BANNER */}
      <div className="hidden lg:block lg:flex-1"></div>

      {/* MAIN CONTENT */}
      <div className="lg:flex-1">
        <UserInfo />
        <UserDescription />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
