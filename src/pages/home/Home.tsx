// components
import Banner from "./Banner";
import Projects from "./sections/Projects";
import Articles from "./sections/Articles";
import Tools from "./sections/Tools";

// datas

const Home = () => {
  return (
    <div>
      <Banner />
      <span id="main-content" className="invinsible"></span>
      <Projects />
      <Articles />
      <Tools />
    </div>
  );
};

export default Home;
